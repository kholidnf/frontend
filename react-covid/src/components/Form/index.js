// import styles from "./index.module.css";
import {useState} from "react";
import logo from "./img/form.png";
import Exception from "../Exception";
import Button from "../ui/button";
import StyledForm from "./StyledForm";
import { useDispatch } from "react-redux";
import { addForm } from "../../features/covidSlice";

function Form({provinces}){

    const dispatch = useDispatch();
     /**
     * Handle multiple input dengan 1 state
     * Membuat state form data
     * nilai berupa objek => Untuk kota dan status diberikan nilai default
     */
     const [formData, setFormData] = useState({
        kota: 0,
        status: "kasus",
        jumlah: "",
    });
    
    //membuat fungsi handle change untuk handle input form (dinamis).

    function handleChange(e){
        //Destructing name dan value
        const {name, value} = e.target;
        /**
         * update state dengan objek baru
         */

        setFormData({
            ...formData,
            [name] : value
        })
    }

    //destructing untuk input
    const {kota, status, jumlah} = formData;

    //membuat state untuk handle exception
    const[isJumlahException, setJumlahException] = useState(false);

    //membuat fungsi validasi
    function validate(){
        if(jumlah === '' ){
            setJumlahException(true);    
            return false;
        }else{
            setJumlahException(false);
            return true;
        }
    }

    function updateStatus(){

        dispatch(addForm(formData))

    }

    //fungsi handleSubmit menjalankan 2 fungsi
    /**
     * - validate 
     * - updateStatus
     */
    function handleSubmit(e){
        /**
         * Mencegah form direfresh ketika di submit
         */
        e.preventDefault();

        validate() && updateStatus();
    }

        return(
            <StyledForm>
                <div className="form__left">
                        <img
                            src={logo}
                            alt="gambar"
                        />
                </div>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form_right">
                        <div className= "form__brand">
                            <h1>Form Covid</h1>
                        </div>
                        <div className="form__title">
                            <label className="form__label">Provinsi</label><br></br>  
                            <select value={kota} onChange={handleChange} className="form__input" name="kota">
                            {provinces.map(function(province, index){
                                return (
                                    <option value={index} key={province.kota}>{province.kota}</option>
                                )
                            })}
                            </select> 
                        </div>
                        <div className="form__status">
                            <label className="form__label">Status</label><br></br>
                            <select value={status} onChange={handleChange} className="form__input" name="status">
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="meninggal">Meninggal</option>
                                <option value="dirawat">Dirawat</option>
                            </select> 
                        </div>
                        <div className="form_jumlah">
                            <label className="form__label">Jumlah</label><br></br>  
                            <input id="jumlah" className="form__input" value={jumlah} onChange={handleChange} type="number" name="jumlah"></input>
                            {isJumlahException ? <Exception> Masukan input dengan benar </Exception> : ""}
                        </div>
                        {/* <button type="submit" className={styles.form__submit}>Submit</button> */}
                        <Button variant="primary" full size="lg">Submit</Button>
                    </div>
                </form>
            </StyledForm>
                
        );
}

export default Form;