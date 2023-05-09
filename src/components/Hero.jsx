const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://s2.glbimg.com/uN1cosUVJ5nYQqjibbrbPwTYEIQ=/e.glbimg.com/og/ed/f/original/2020/03/04/maldives-1993704_1280.jpg"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Ache sua viagem especial</h1>
          <h2 className="text-4xl py-4 italic">Viva sua vida</h2>
          <p>
            Nós da weekaway priorizamos totalmente os meios e os fins de todos
            sua viagens. Planejamos a compra das passagens, hospedagens,
            passeios, e muito mais!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
