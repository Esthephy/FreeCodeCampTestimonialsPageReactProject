import React from "react";

import "../hojas-de-estilo/Testimonio.css";

export function Testimonio(props) {
  // Función para convertir un texto en HTML con ciertas palabras en negrita
  const convertirHtmlConNegrita = (texto) => {
    const regex = new RegExp(
      `\\b(${props.palabrasEnNegrita.join("|")})\\b`,
      "gi"
    );

    return texto.replace(regex, "<strong>$1</strong>");
  };

  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.url}.png`)}
        alt={`Fotografía de ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>

        <p
          className="texto-testimonio"
          dangerouslySetInnerHTML={{
            __html: convertirHtmlConNegrita(props.testimonio),
          }}
        />
      </div>
    </div>
  );
}
