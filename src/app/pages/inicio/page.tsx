import PaginaTest from "@/components/PaginaTest";

export default function page() {
  return (
    <div className="flex justify-center items-center wrap h-dvh">
      <div className="h-1/2 flex items-center">
        <div className="text-2xl mx-2 my-4 text-center ">La fucking pagina</div>
      </div>
      <div className="h-1/2 flex items-center text-4xl">
          <PaginaTest />
      </div>
    </div>
  );
}
