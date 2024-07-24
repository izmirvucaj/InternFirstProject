import React from 'react';
import { Card, Button, Nav, NavLink } from 'react-bootstrap';
import './Permit.css';

const LeaveRequest = () => {
  const remainingLeave = 1;
  const totalLeave = 0;
  const nextEntitlementDate = '22 Temmuz 2025';

  return (
    <div className="leave-request-container">
      <h3>İzin İşlemleri</h3>
      <Nav variant="tabs">
        <Nav.Item>
          <NavLink to="/" exact className="nav-link">İzin Taleplerim</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/leave-approvals" className="nav-link">İzin Onayları</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/leave-employees" className="nav-link">İzinli Çalışanlar</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/annual-leave-durations" className="nav-link">Yıllık İzin Süreleri</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/all-leaves" className="nav-link">Tüm İzinler</NavLink>
        </Nav.Item>
      </Nav>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Yıllık İzin</Card.Title>
          <div className="d-flex align-items-center">
            <div className="circle-progress">
              <div className="progress-label">
                Kalan
                <div className="days-left">{remainingLeave} Gün</div>
              </div>
            </div>
            <div className="ml-4">
              <p><strong>Kalan İzin Süresi:</strong> {remainingLeave} Gün</p>
              <p><strong>Yıllık Hak Edilen İzin Süresi:</strong> {totalLeave} Gün</p>
              <p><strong>Sonraki Hakedis Tarihi:</strong> {nextEntitlementDate}</p>
            </div>
          </div>
          <Button variant="success" className="mt-3">+ İzin Talebi Oluştur</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeaveRequest;
