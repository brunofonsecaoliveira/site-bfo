console.log("Projeto BFO V3 carregado.");

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Header reduzido ao rolar
window.addEventListener("scroll", function() {
  const topo = document.getElementById("topo");

  if (!topo) return;

  if (window.scrollY > 80) {
    topo.classList.add("reduzido");
  } else {
    topo.classList.remove("reduzido");
  }
});

// Traduções
const traducoes = {
  pt: {
    menuInicio: "Início",
    menuPericias: "Perícias",
    menuAuditoria: "Auditoria",
    menuConsultoria: "Consultoria",
    menuSobre: "Sobre",
    menuFormacao: "Formação",
    menuCursos: "Cursos",
    menuCertificacoes: "Certificações",
    menuContato: "Contato",

    heroTag: "Perícias Judiciais e Extrajudiciais • Auditoria Independente • Consultoria Financeira",
    heroTitulo: "Bruno Fonseca<br>de Oliveira",
    heroSlogan: "Precisão Técnica. Ética. Confiança.",
    heroDescricao: "Contador, Auditor Fiscal, Perito Contábil, Auditor Independente, Consultor Financeiro e Bacharel em Direito, aprovado no Exame da Ordem dos Advogados do Brasil, com mais de 12 anos de experiência na Administração Tributária.",
    botaoCurriculo: "Baixar Currículo",
    botaoWhatsapp: "Falar no WhatsApp",

    painel1: "Perito Judicial<br>e Extrajudicial",
    painel2: "Auditor<br>Independente",
    painel3: "Consultor<br>Financeiro",
    painel4: "Auditor Fiscal",
    painel5: "+12 anos de<br>experiência",

    tituloPericias: "Áreas de Atuação",
    subtituloPericias: "Atuação técnica especializada em perícias judiciais, auditoria e consultoria.",
    pericia1: "Perícias Bancárias",
    pericia2: "Perícias Contábeis",
    pericia3: "Perícias Financeiras",
    pericia4: "Perícias Tributárias",
    pericia5: "Licitações e Contratos",

    tituloAuditoria: "Auditoria Independente",
    textoAuditoria: "Atuação em auditoria independente com foco na confiabilidade das demonstrações contábeis, revisão limitada, procedimentos previamente acordados, controles internos, compliance e due diligence.",

    tituloConsultoria: "Consultoria Financeira",
    textoConsultoria: "Planejamento financeiro, investimentos, renda fixa, renda variável, previdência, ETFs, derivativos e estratégias para busca da independência financeira.",

    tituloSobre: "Sobre Mim",
    textoSobre: "Contador, Bacharel em Direito aprovado no Exame da Ordem dos Advogados do Brasil, Auditor Fiscal, Perito Contábil, Auditor Independente e Consultor Financeiro. Especialista em Direito Tributário, Gestão Pública e MBA em Perícia Judicial e Extrajudicial, atuando com ética, independência, fundamentação técnica e compromisso com a qualidade dos trabalhos desenvolvidos.",

    tituloFormacao: "Formação Acadêmica",
    tituloCursos: "Aperfeiçoamento Profissional e Educação Executiva",
    tituloCertificacoes: "Certificações",
    tituloContato: "Contato"
  },

  en: {
    menuInicio: "Home",
    menuPericias: "Forensics",
    menuAuditoria: "Audit",
    menuConsultoria: "Advisory",
    menuSobre: "About",
    menuFormacao: "Education",
    menuCursos: "Courses",
    menuCertificacoes: "Certifications",
    menuContato: "Contact",

    heroTag: "Judicial and Extrajudicial Forensic Accounting • Independent Audit • Financial Advisory",
    heroTitulo: "Bruno Fonseca<br>de Oliveira",
    heroSlogan: "Technical Precision. Ethics. Trust.",
    heroDescricao: "Accountant, Tax Auditor, Forensic Accountant, Independent Auditor, Financial Consultant and Bachelor of Laws, approved in the Brazilian Bar Examination, with over 12 years of experience in Tax Administration.",
    botaoCurriculo: "Download Résumé",
    botaoWhatsapp: "Contact on WhatsApp",

    painel1: "Judicial and<br>Extrajudicial Expert",
    painel2: "Independent<br>Auditor",
    painel3: "Financial<br>Consultant",
    painel4: "Tax Auditor",
    painel5: "+12 years of<br>experience",

    tituloPericias: "Practice Areas",
    subtituloPericias: "Specialized technical work in forensic accounting, audit and advisory.",
    pericia1: "Banking Forensics",
    pericia2: "Accounting Forensics",
    pericia3: "Financial Forensics",
    pericia4: "Tax Forensics",
    pericia5: "Bidding and Contracts",

    tituloAuditoria: "Independent Audit",
    textoAuditoria: "Independent audit services focused on the reliability of financial statements, limited reviews, agreed-upon procedures, internal controls, compliance and due diligence.",

    tituloConsultoria: "Financial Advisory",
    textoConsultoria: "Financial planning, investments, fixed income, equities, pension planning, ETFs, derivatives and strategies aimed at financial independence.",

    tituloSobre: "About Me",
    textoSobre: "Accountant, Bachelor of Laws approved in the Brazilian Bar Examination, Tax Auditor, Forensic Accountant, Independent Auditor and Financial Consultant. Specialist in Tax Law, Public Management and MBA in Judicial and Extrajudicial Forensics, working with ethics, independence, technical foundation and commitment to quality.",

    tituloFormacao: "Academic Background",
    tituloCursos: "Professional Development and Executive Education",
    tituloCertificacoes: "Certifications",
    tituloContato: "Contact"
  },

  es: {
    menuInicio: "Inicio",
    menuPericias: "Pericias",
    menuAuditoria: "Auditoría",
    menuConsultoria: "Consultoría",
    menuSobre: "Perfil",
    menuFormacao: "Formación",
    menuCursos: "Cursos",
    menuCertificacoes: "Certificaciones",
    menuContato: "Contacto",

    heroTag: "Pericias Judiciales y Extrajudiciales • Auditoría Independiente • Consultoría Financiera",
    heroTitulo: "Bruno Fonseca<br>de Oliveira",
    heroSlogan: "Precisión Técnica. Ética. Confianza.",
    heroDescricao: "Contador, Auditor Fiscal, Perito Contable, Auditor Independiente, Consultor Financiero y Licenciado en Derecho, aprobado en el Examen de la Orden de Abogados de Brasil, con más de 12 años de experiencia en Administración Tributaria.",
    botaoCurriculo: "Descargar Currículo",
    botaoWhatsapp: "Hablar por WhatsApp",

    painel1: "Perito Judicial<br>y Extrajudicial",
    painel2: "Auditor<br>Independiente",
    painel3: "Consultor<br>Financiero",
    painel4: "Auditor Fiscal",
    painel5: "+12 años de<br>experiencia",

    tituloPericias: "Áreas de Actuación",
    subtituloPericias: "Actuación técnica especializada en pericias judiciales, auditoría y consultoría.",
    pericia1: "Pericias Bancarias",
    pericia2: "Pericias Contables",
    pericia3: "Pericias Financieras",
    pericia4: "Pericias Tributarias",
    pericia5: "Licitaciones y Contratos",

    tituloAuditoria: "Auditoría Independiente",
    textoAuditoria: "Servicios de auditoría independiente enfocados en la confiabilidad de los estados financieros, revisiones limitadas, procedimientos previamente acordados, controles internos, compliance y due diligence.",

    tituloConsultoria: "Consultoría Financiera",
    textoConsultoria: "Planificación financiera, inversiones, renta fija, renta variable, previsión, ETFs, derivados y estrategias para la búsqueda de la independencia financiera.",

    tituloSobre: "Sobre mí",
    textoSobre: "Contador, Licenciado en Derecho aprobado en el Examen de la Orden de Abogados de Brasil, Auditor Fiscal, Perito Contable, Auditor Independiente y Consultor Financiero. Especialista en Derecho Tributario, Gestión Pública y MBA en Pericia Judicial y Extrajudicial, actuando con ética, independencia, fundamentación técnica y compromiso con la calidad.",

    tituloFormacao: "Formación Académica",
    tituloCursos: "Perfeccionamiento Profesional y Educación Ejecutiva",
    tituloCertificacoes: "Certificaciones",
    tituloContato: "Contacto"
  }
};

// Aplicar idioma
function aplicarIdioma(idioma) {
  const textos = traducoes[idioma] || traducoes.pt;

  document.querySelectorAll("[data-i18n]").forEach(function(elemento) {
    const chave = elemento.getAttribute("data-i18n");

    if (textos[chave]) {
      elemento.innerHTML = textos[chave];
    }
  });

  document.querySelectorAll(".idioma").forEach(function(botao) {
    botao.classList.remove("ativo");
  });

  const botaoAtivo = document.querySelector(`.idioma[data-lang="${idioma}"]`);

  if (botaoAtivo) {
    botaoAtivo.classList.add("ativo");
  }

  document.documentElement.lang = idioma === "pt" ? "pt-BR" : idioma;
  localStorage.setItem("idiomaBFO", idioma);
}

// Eventos dos botões de idioma
document.querySelectorAll(".idioma").forEach(function(botao) {
  botao.addEventListener("click", function() {
    aplicarIdioma(this.getAttribute("data-lang"));
  });
});

// Carregar idioma salvo
const idiomaSalvo = localStorage.getItem("idiomaBFO") || "pt";
aplicarIdioma(idiomaSalvo);
