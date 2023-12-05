import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
} from "reactstrap";
import "./Login.css"; // Đảm bảo bạn đã tạo file CSS này

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Đây là nơi bạn có thể gọi API đăng nhập
    // Giả lập quá trình đăng nhập với setTimeout
    setTimeout(() => {
      setIsLoading(false);
      if (username === "admin" && password === "admin") {
        // Đăng nhập thành công, chuyển hướng đến TodoApp
        navigate("/todos");
      } else {
        // Thông báo lỗi đăng nhập
        alert("Sai thông tin đăng nhập!");
      }
    }, 2000);
  };

  return (
    <Container className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h2 className="text-center mb-4">Đăng Nhập</h2>
        <FormGroup>
          <Label for="username">Tên Người Dùng</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Nhập tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Mật Khẩu</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormGroup>
        <Button color="primary" className="login-button" disabled={isLoading}>
          {isLoading ? (
            <div className="loading-container">
              <Spinner size="lg" className="spinner-border" />
              <span className="loading-text">
                <div class="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </span>
            </div>
          ) : (
            "Đăng Nhập"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
