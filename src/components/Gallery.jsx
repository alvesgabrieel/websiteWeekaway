const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Galeria</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://www.guiadasemana.com.br/contentFiles/image/opt_w1180h738/2017/09/FEA/53423_dpny.jpg"
            alt="resorte pallace"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="http://myhols.ie/wp-content/uploads/2018/01/pexels-photo-298007-1024x682-0-900x.jpg"
            alt="cabana resort tumandre"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/6EgUw6lpQZzYwLbdmbIQ5AFk8TofnO_ZmPh--H8ENyp50pqxAJ1ulX7BrZAfAsO9qSlfyxRZCDbxP5EPiu3dLVun1TdMOL9sjz8hjbeu"
            alt="pier resort pipa"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/CBuYU1MHDmDa970G52XmvX9rUIjHgSeDseukErSLy1Gphhxkez9SeXoVN7NA_7IhQH64XdyJGmpwM94F2cPEMwpTDXVazWboL3L7NmMi"
            alt="campo de golfe beach califa"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9d/24/9a/pipa.jpg?w=1200&h=-1&s=1"
            alt="pipa beach"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
