import { Button } from "@mui/material"
import "./result.css"

export const Result = () => {
    return (
        <div className="resultbox">
            <p className="name">Yusuf Aydın</p><br />
            <div className="durum">
                <p className="text">48 puan</p>
                <p className="puan">12/25</p>
            </div>
            <div className="durum">
                <p className="text"> Durum: </p>
                <p> başarılı/başarırız</p>
            </div>
            <Button className="buton" variant="contained" disableElevation sx={{
                borderRadius: 5, backgroundColor: "#092635",
                width: '25ch', margin: 'auto'
            }}>
                Anasayfa
            </Button>
        </div>
    )
}