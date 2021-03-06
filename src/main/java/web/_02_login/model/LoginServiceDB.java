package web._02_login.model;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import javax.naming.*;
import javax.sql.*;

import web._00_init.*;
import web._01_register.model.MemberBean;
public class LoginServiceDB implements LoginServiceDAO {
	static private List<MemberBean> memberList = new ArrayList<MemberBean>();
	private DataSource ds = null;

	public LoginServiceDB() throws NamingException, SQLException {
		Context ctx = new InitialContext();
		ds = (DataSource) ctx.lookup(GlobalService.JNDI_DB_NAME);
		if (memberList.isEmpty()) {
			populateMemberList(); // 此方法只會執行一次
		}
	}
	public MemberBean checkPassword(String user, String password) throws SQLException {
		String sql = "SELECT * From ind where indId = ? and indPassword = ? ";
		Connection connection = null;
		PreparedStatement pStmt = null;
		ResultSet rs = null;
		MemberBean mb = null;
		try {
			connection = ds.getConnection();
			System.out.println("sql=" + sql);
			pStmt = connection.prepareStatement(sql);
			pStmt.setString(1,  user);
			pStmt.setString(2,  password);
			rs = pStmt.executeQuery();
			
			if (rs.next()) {
				int userType = rs.getInt("userType");
				java.sql.Timestamp postDate = rs.getTimestamp("postDate");				
				String indId = rs.getString("indId").trim(); // 必須確定
																// rs.getString("memberID")
																// 不是null才能
																// .trim()
				String indPassword = rs.getString("indPassword").trim();				
				String indName = rs.getString("indName").trim();
				String indPhone = rs.getString("indPhone");
				String indEmail = rs.getString("indEmail");				
				String indAddress = rs.getString("indAddress");
				Blob indImage = rs.getBlob("indImage");//
				String indFileName = rs.getString("indFileName");//


				mb = new MemberBean(userType, postDate, indId, indPassword, 
						indName, indPhone, indEmail, indAddress,indImage,indFileName);
				
			}
		} finally {
			if (rs != null) {
				rs.close();
			}
			if (connection != null) {
				connection.close();
			}
		}
			return mb;
	}
	public void populateMemberList() throws SQLException {
		// 由Database讀取會員資料
		String sql = "SELECT * From ind";
		Connection connection = null;
		PreparedStatement pStmt = null;
		ResultSet rs = null;
		try {
			connection = ds.getConnection();
			pStmt = connection.prepareStatement(sql);
			rs = pStmt.executeQuery();
			while (rs.next()) {
				int userType = rs.getInt("userType");
				java.sql.Timestamp postDate = rs.getTimestamp("postDate");				
				String indId = rs.getString("indId").trim(); // 必須確定
																// rs.getString("memberID")
																// 不是null才能
																// .trim()
				String indPassword = rs.getString("indPassword").trim();				
				String indName = rs.getString("indName").trim();
				String indPhone = rs.getString("indPhone");
				String indEmail = rs.getString("indEmail");				
				String indAddress = rs.getString("indAddress");				

				MemberBean mb = new MemberBean(userType, postDate, indId, indPassword, 
						indName, indPhone, indEmail, indAddress);

				memberList.add(mb);
			}
		} finally {
			if (rs != null) {
				rs.close();
			}
			if (connection != null) {
				connection.close();
			}
		}
	}

	public MemberBean checkIDPassword(String userId, String password) {
		// 檢查userId與password是否正確
		for (MemberBean mb : memberList) {
			if (mb.getIndid().trim().equals(userId.trim())) {
				String encrypedString = GlobalService.encryptString(password.trim());
				String pswd = GlobalService.getMD5Endocing(encrypedString);
				String mbpswd = mb.getIndpassword().trim();
				if (mbpswd.equals(pswd)) {
					return mb;
				}
			}
		}
		return null;
	}

	public List<MemberBean> getMemberList() {
		return memberList;
	}
	public void addNewMember(MemberBean mb) {
		memberList.add(mb);
	}
	
}
