const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://lh3.googleusercontent.com/UC0WYmPETccoIqL8_DxVJNDDd4kbwvpGl2QzCcImajg9FzBWnkD5g1aYATo2HT6ns53OBHAfD3Kj9NXtezav3P3TwVmYYiF6-INcTiU"
          alt="resort"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Viagens
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://s2.glbimg.com/XfMlDiMus--t5RF5Wm0cDMNCDWU=/0x0:1365x765/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/7/L/3KlO0fS6erylDmkITdAg/noruega-2.jpg"
          alt="cruzeiro"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Atividades
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://blog.bonitour.com.br/wp-content/uploads/2019/05/Capa.jpg"
          alt="mergulho"
        />
      </div>
    </div>
  );
};

export default Activities;
