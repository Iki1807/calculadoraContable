
let operacion = "";
const resultado = document.getElementById("resultado");

// Mostrar número
document.querySelectorAll(".numero").forEach(btn => {
  btn.addEventListener("click", () => {
    const valor = btn.textContent.replace(",", ".");
    operacion += valor;
    resultado.textContent = operacion;
  });
});

// Operaciones
document.getElementById("suma").onclick = () => agregarOp("+");
document.getElementById("resta").onclick = () => agregarOp("-");
document.getElementById("multiplicar").onclick = () => agregarOp("*");
document.getElementById("dividir").onclick = () => agregarOp("/");

function agregarOp(op) {
  if (operacion !== "" && !operacion.endsWith("+") && !operacion.endsWith("-") && !operacion.endsWith("*") && !operacion.endsWith("/")) {
    operacion += op;
    resultado.textContent = operacion;
  }
}

// Igual
document.getElementById("igual").onclick = () => {
  try {
    operacion = eval(operacion).toString();
    resultado.textContent = operacion;
  } catch (e) {
    resultado.textContent = "Error";
    operacion = "";
  }
};

// Borrar (←)
document.getElementById("borrar").onclick = () => {
  operacion = operacion.slice(0, -1);
  resultado.textContent = operacion || "0";
};

// Limpiar todo
document.getElementById("limpiar").onclick = () => {
  operacion = "";
  resultado.textContent = "0";
};

// IVA 21%
document.getElementById("IVA21").onclick = () => {
  if (operacion) {
    const valor = parseFloat(operacion);
    const conIVA = valor * 0.21;
    operacion = conIVA.toFixed(2).toString();
    resultado.textContent = operacion;
  }
};

// IVA 10,5%
document.getElementById("IVA10").onclick = () => {
  if (operacion) {
    const valor = parseFloat(operacion);
    const conIVA = valor * 0.105;
    operacion = conIVA.toFixed(2).toString();
    resultado.textContent = operacion;
  }
};

