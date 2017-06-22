package app.user;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import app.main.HibernateUtil;

public class MemberDAO {
	SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	public boolean isExists(String indId) {
		boolean check = false; // 檢查id是否已經存在
		Session session = sessionFactory.getCurrentSession();
		Transaction tx = session.beginTransaction();
		try {
			String hql = "From MemberBean where indId = :uid";
			Query query = session.createQuery(hql);
			query.setParameter("uid", indId);
			List<MemberBean> list = query.getResultList();
			if (list.size() > 0) {
				check = true;
			}
			tx.commit();
		} catch (Exception e) {
			if (tx != null)
				tx.rollback();
		} finally {
			session.close();
		}
		return check;

	}

	public boolean checkPassword(MemberBean mb) {
		boolean check = false; // 檢查id是否已經存在
		Session session = sessionFactory.getCurrentSession();
		Transaction tx = session.beginTransaction();
		try {
			String hql = "From MemberBean where indId = :uid and password = :upassword ";
			Query query = session.createQuery(hql);
			query.setParameter("uid", mb.getUserId());
			query.setParameter("upassword", mb.getPassword());
			List<MemberBean> list = query.getResultList();
			if (list.size() > 0) {
				check = true;
			}
			tx.commit();
		} catch (Exception e) {
			if (tx != null)
				tx.rollback();
		} finally {
			session.close();
		}
		return check;

	}

	public int save(MemberBean user) {
		int n = 0;
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		try {
			Object o = session.save(user);
			System.out.println("o = " + o);
			tx.commit();
			n = 1;
		} catch (Exception ex) {
			tx.rollback();
			ex.printStackTrace();
		} finally {
			if (session != null)
				session.close();
		}
		return n;
	}
	
	public int saveIn(MemberBean mb, InstiutionBean ins) {
		int n = 0;
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		try {
			session.save(mb);
			session.save(ins);
			tx.commit();
			n = 1;
		} catch (Exception ex) {
			tx.rollback();
			ex.printStackTrace();
		} finally {
			if (session != null)
				session.close();
		}
		return n;
	}

	public int delete(String userId) {
		int n = 0;
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		try {
			MemberBean user = new MemberBean();
			user.setUserId(userId);
			session.delete(user);
			tx.commit();
			n = 1;
		} catch (Exception ex) {
			tx.rollback();
			ex.printStackTrace();
		} finally {
			if (session != null)
				session.close();
		}
		return n;
	}

	public int update(MemberBean user) {
		int n = 0;
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		try {
			session.update(user);
			tx.commit();
			n = 1;
		} catch (Exception ex) {
			tx.rollback();
			ex.printStackTrace();
		} finally {
			if (session != null)
				session.close();
		}
		return n;
	}

	public MemberBean get(String userId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		MemberBean stock = new MemberBean();
		try {
			stock = session.get(MemberBean.class, userId);
			tx.commit();
		} catch (Exception ex) {
			tx.rollback();
			ex.printStackTrace();
		} finally {
			if (session != null)
				session.close();
		}
		return stock;
	}

	public MemberBean load(String userId) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		MemberBean stock = new MemberBean();
		try {
			stock = session.load(MemberBean.class, userId);
			tx.commit();
		} catch (Exception ex) {
			tx.rollback();
			ex.printStackTrace();
		} finally {
			if (session != null)
				session.close();
		}
		return stock;
	}

	public void close() {
		sessionFactory.close();
	}
}