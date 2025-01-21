import Footer from "../Footer";
import Container from "../Container";
import Navbar from "../Navbar/Navbar"
/**
 * Membuat komponen layout
 * LAyout terdiri dari Navbar, Footer dan Children
 * -Menggunakan props
 */

function Layout(props){
    return (
       <div>
        <Navbar />
            <main>
                {/**
                 * konten akan dibungkus dengan container
                 */}
                <Container>
                    {props.children}
                </Container>
            </main>
        <Footer />
       </div>
    );
}


export default Layout;