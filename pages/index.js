import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CASSDI SOLUTIONS</title>
        <meta
          name="description"
          content="CASSDI SOLUTIONS - Consultoria Avanzada de Software y Soluciones de Desarrollo Inteligente"
        />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <CustomComponents />
    </div>
  );
}
