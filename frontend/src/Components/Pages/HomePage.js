import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './HomePage.css'; // Import custom CSS for HomePage component
import '../Common/Main.css';

const HomePage = () => {
    return (
        <div className="content-container"> 
            <h1 className="page-title">Ana Sayfa</h1>
            <div className="button-container">
                <Button variant="primary" size="sm" className="btn-new-request">
                    Yeni Talep Oluștur
                </Button>{' '}
                <Button variant="primary" size="sm" className="btn-new-department">
                    Yeni Departman Oluştur
                </Button>{' '}
                <Button variant="primary" size="sm" className="btn-new-employee">
                    Yeni Çalışan Oluștur
                </Button>

            </div>
            <Card className="custom-card">
                <Card.Body>
                    <Card.Title>İzin Bilgilerim</Card.Title>
                    <Row>
                        <Col className="text-center">
                            <div className="circle-container">
                                <CircularProgressbar
                                    value={0}
                                    text={`0`}
                                    styles={buildStyles({
                                        textColor: "#3e98c7",
                                        pathColor: "#3e98c7",
                                        trailColor: "#d6d6d6"
                                    })}
                                />
                            </div>
                            <div className="circle-label">Senelik İzin</div>
                        </Col>
                        <Col className="text-center">
                            <div className="circle-container">
                                <CircularProgressbar
                                    value={0}
                                    text={`0`}
                                    styles={buildStyles({
                                        textColor: "#f6b26b",
                                        pathColor: "#f6b26b",
                                        trailColor: "#d6d6d6"
                                    })}
                                />
                            </div>
                            <div className="circle-label">Aktif İzin Taleplerim</div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="custom-card">
                <Card.Body>
                    <Card.Title>İzin Taleplerim</Card.Title>
                    <Card.Text>
                        Bu, mevcut kartın altında eklenen yeni bir karttır. Buraya metin veya diğer içerikleri ekleyebilirsiniz.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="custom-card">
                <Card.Body>
                    <Card.Title>İzin Onayları</Card.Title>
                    <Card.Text>
                        Bu, mevcut kartın altında eklenen yeni bir karttır. Buraya metin veya diğer içerikleri ekleyebilirsiniz.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="custom-card">
                <Card.Body>
                    <Card.Title>İzindeki Çalışanlar</Card.Title>
                    <Card.Text>
                        Bu, mevcut kartın altında eklenen yeni bir karttır. Buraya metin veya diğer içerikleri ekleyebilirsiniz.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="custom-card">
                <Card.Body>
                    <Card.Title>Tebrikler</Card.Title>
                    <Card.Text>
                        Bu, mevcut kartın altında eklenen yeni bir karttır. Buraya metin veya diğer içerikleri ekleyebilirsiniz.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
}

export default HomePage;
