"use client"

import { useState } from "react"

export default function RegisterUser({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    cpf: "",
    phone: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate registration
    alert("Cadastro realizado com sucesso!")
    onNavigate("login-user")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: "800px" }}>
        <div className="auth-logo">🌿</div>

        <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#333" }}>Cadastro de novo cliente</h1>
        <h2 style={{ fontSize: "20px", marginBottom: "30px", color: "#666" }}>Dados Pessoais</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nome completo:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label htmlFor="birthDate">Data de nascimento:</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                required
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label htmlFor="phone">Telefone:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Celular:</label>
              <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div className="form-group">
              <label htmlFor="password">Senha de acesso:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Digite novamente:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <p style={{ color: "#666", fontSize: "14px" }}>
              Ao continuar você concorda com nossa{" "}
              <a href="#" style={{ color: "#6b9b76", textDecoration: "underline" }}>
                política de privacidade.
              </a>
            </p>
          </div>

          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <button type="submit" className="btn btn-primary" style={{ minWidth: "120px" }}>
              Registrar
            </button>
          </div>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p style={{ color: "#666", marginBottom: "10px" }}>
              Já tem uma conta?{" "}
              <button
                type="button"
                onClick={() => onNavigate("login-user")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#6b9b76",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Faça login
              </button>
            </p>
            <p style={{ color: "#666", marginBottom: "15px" }}>Ou registre-se com:</p>
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
      </div>
    </div>
  )
}
