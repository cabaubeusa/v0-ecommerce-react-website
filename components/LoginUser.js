"use client"

import { useState } from "react"

export default function LoginUser({ onLogin, onNavigate }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login
    onLogin({ name: formData.username, email: formData.username }, "user")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">🌿</div>

        <h1 style={{ fontSize: "32px", marginBottom: "40px", color: "#333" }}>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuário de Login:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <a href="#" style={{ color: "#666", fontSize: "14px", textDecoration: "underline" }}>
              Esqueceu a senha?
            </a>
          </div>

          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <button type="submit" className="btn btn-primary" style={{ minWidth: "120px" }}>
              Entrar
            </button>
          </div>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p style={{ color: "#666", marginBottom: "10px" }}>
              Não tem uma conta?
              <button
                type="button"
                onClick={() => onNavigate("register-user")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#6b9b76",
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
              >
                Cadastre-se
              </button>
            </p>
            <p style={{ color: "#666", marginBottom: "15px" }}>Ou faça login com:</p>
          </div>

          <div className="social-login">
            <button type="button" className="social-btn facebook">
              f
            </button>
            <button type="button" className="social-btn google">
              G
            </button>
            <button type="button" className="social-btn apple">
              🍎
            </button>
          </div>
        </form>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            paddingTop: "20px",
            borderTop: "1px solid #ddd",
          }}
        >
          <button
            onClick={() => onNavigate("login-admin")}
            style={{
              background: "none",
              border: "none",
              color: "#6b9b76",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Login Administrador
          </button>
        </div>
      </div>
    </div>
  )
}
