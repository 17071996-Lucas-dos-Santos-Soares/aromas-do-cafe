const empresa = {
    nome: "Aromas do café",
    slogan: "Sua pausa para desfrutar a vida. Boas vindas ao aromas do café",
    endereco: "Av. Central, 123 - Centro, São Paulo",
    email: "contato@aromasdocafe.com.br",
    phone: "(11) 9999-999"
}
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("nome-empresa").textContent = empresa.nome;
    document.getElementById("slogan-empresa").textContent = empresa.slogan;
    document.getElementById("endreço-empresa").textContent = empresa.endereco;
    document.getElementById("empresa-email").textContent = empresa.email;
    document.getElementById("empresa-telefone").textContent = empresa.phone;
})

document.getElementById("email-empresa").href = `mailto:${empresa.email}`;
document.getElementById("telefone-empresa").href = `tel:${empresa.telefone.replace(/\D/g, '')}`;