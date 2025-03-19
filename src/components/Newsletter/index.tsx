export const Newsletter = () => {
  return (
    <section className="section-newsletter">
      <div className="box-newsletter">
        <p>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? <strong>Cadastre-se!</strong>
        </p>
        <form action="">
          <input type="email" name="email" placeholder="Digite seu email" />
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};
