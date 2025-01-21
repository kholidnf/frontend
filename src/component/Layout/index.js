import Container from "../Container";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

/**
 * Membuat Component Layout.
 * Layout terdiri dari Navbar, Footer, children.
 * Menggunakan teknik Composition:
 * - Menampilkan konten dinamis.
 * - Menggunakan props children.
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {
            /**
             * Menggunakan Componen Container
             * Conten Dibungkus dengan Container
             */
        }
        <Container>
            {children}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
