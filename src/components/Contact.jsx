const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Mande sua mensagem</h2>
      <p className="text-center text-gray-700 py-2">
        Nos diga para onde voce deseja ir!
      </p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://lh3.googleusercontent.com/fdKzkPS32HmPW2nTt3tuD-7bbcYqf-z5-wakKVv27-LvsiYGhKMtSBjhOfNEXkkcGkCYQWYapCEriOAuNvDnzlfH7rINvtBxUlEZDOc"
          alt="paradise em punta cana"
        />
        <form>
          <div className="grid grid-cols-2">
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Primeiro"
            />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Ultimo"
            />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2"
              type="tel"
              placeholder="Celular"
            />
            <input
              className="border col-span-2 p-2 m-2"
              type="text"
              placeholder="Endereço"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
