import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, FormEvent } from "react";
import heroAsset from "../assets/vertex-getulio-hero.png.asset.json";
import logoAsset from "../assets/vertex-getulio-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertex Getúlio | Pré-lançamento" },
      {
        name: "description",
        content: "Antecipe sua aprovação para o pré-lançamento Vertex Getúlio, a 170 metros da Avenida Getúlio Vargas.",
      },
      { property: "og:title", content: "Vertex Getúlio | Pré-lançamento" },
      {
        property: "og:description",
        content: "Condições de pré-lançamento e entrada facilitada no Vertex Getúlio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const BROKER_WHATSAPP = "5575991658050";

function Index() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const perfil = String(formData.get("perfil") ?? "");
    const entrada = String(formData.get("entrada") ?? "");
    const msg = `Olá! Vi que o Vertex Getúlio tem avaliação da Caixa de R$ 255 mil e quero enviar minha documentação para garantir as condições de pré-lançamento. Meu perfil é ${perfil} e sobre a entrada: ${entrada}.`;
    window.location.href = `https://wa.me/${BROKER_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }

  return (
    <main className="site-shell">
      <header className="brand">
        <img className="brand-logo" src={logoAsset.url} alt="Vertex Getúlio" />
        <div className="badge">PRÉ-LANÇAMENTO</div>
      </header>

      <section
        className="hero"
        style={{ "--hero-image": `url(${heroAsset.url})` } as CSSProperties}
      >
        <div className="hero-content">
          <h1>A inteligência de investir, o privilégio de morar a 170m da Getúlio Vargas.</h1>
          <p>
            Antecipe-se ao pré-lançamento. Empreendimento já avaliado pela Caixa em R$ 255.000, com unidades disponíveis por valor inferior na abertura de vendas. Entrada facilitada com parcelamento no boleto. Envie sua documentação e garanta prioridade.
          </p>
          <div className="unit">
            <div className="unit-num">2/4</div>
            <div className="unit-text">apartamento com varanda, prédio com elevador</div>
          </div>
        </div>
      </section>

      <section className="features" aria-label="Características do empreendimento">
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <div className="feature-label">2 quartos</div>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M4 15h16" strokeLinecap="round" /><path d="M8 15v6M16 15v6" strokeLinecap="round" /></svg>
          <div className="feature-label">Varanda</div>
        </div>
        <div className="feature">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="1" /><path d="M10 8l2-2 2 2M10 16l2 2 2-2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <div className="feature-label">Elevador</div>
        </div>
      </section>

      <section className="location" aria-label="Localização">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
        <div className="location-text"><strong>170 metros</strong>da Av. Getúlio Vargas</div>
      </section>

      <section className="financing">
        <h2 className="financing-title">Como <span>financiar</span></h2>
        <div className="fin-row">
          <div className="fin-num">01</div>
          <div className="fin-text"><strong>Ganho de Patrimônio Imediato</strong> — Com avaliação oficial da Caixa a R$ 255.000 e valor de venda inferior, você assina o contrato com o seu patrimônio já valorizado na largada.</div>
        </div>
        <div className="fin-row">
          <div className="fin-num">02</div>
          <div className="fin-text"><strong>Minha Casa Minha Vida</strong> — financiamento facilitado direto na Caixa.</div>
        </div>
        <div className="fin-row">
          <div className="fin-num">03</div>
          <div className="fin-text">Entrada parcelada no boleto, direto com a construtora e sem burocracia.</div>
        </div>
        <div className="fin-row">
          <div className="fin-num">04</div>
          <div className="fin-text"><strong>Tabela exclusiva para investidores</strong> que fecham o plano de pagamento direto com a construtora.</div>
        </div>
      </section>

      <section className="form-section">
        <h2 className="form-title">Comece agora sua <span>aprovação</span></h2>
        <p className="form-sub">Apenas clientes com documentação em análise terão acesso à reserva de unidades. Preencha seus dados para iniciar a aprovação.</p>

        <form id="leadForm" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="nome">NOME COMPLETO</label>
            <input type="text" id="nome" name="nome" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="telefone">WHATSAPP (COM DDD)</label>
            <input type="tel" id="telefone" name="telefone" autoComplete="tel" placeholder="(75) 9XXXX-XXXX" required />
          </div>
          <div className="field">
            <label htmlFor="perfil">VOCÊ É</label>
            <select id="perfil" name="perfil" defaultValue="" required>
              <option value="" disabled>Selecione seu objetivo...</option>
              <option value="Quero para Morar">Quero para Morar</option>
              <option value="Quero para Investir">Quero para Investir</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="entrada">VALOR PARA ENTRADA</label>
            <select id="entrada" name="entrada" defaultValue="" required>
              <option value="" disabled>Selecione uma opção...</option>
              <option value="Sim, possuo valor em reserva">Sim, possuo valor em reserva</option>
              <option value="Vou utilizar apenas o FGTS">Vou utilizar apenas o FGTS</option>
              <option value="Possuo valor em reserva + FGTS">Possuo valor em reserva + FGTS</option>
              <option value="Não possuo valor no momento">Não possuo valor no momento</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">QUERO ANTECIPAR MINHA APROVAÇÃO</button>
        </form>

        <p className="disclaimer">Ao enviar, você será redirecionado ao WhatsApp da nossa equipe para dar início ao processo de aprovação.</p>
      </section>

      <footer className="footer">FEIRA DE SANTANA · BA</footer>
    </main>
  );
}