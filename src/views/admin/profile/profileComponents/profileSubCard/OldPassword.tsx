import React, {useState} from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function OldPassword() {
    const history = useHistory()
    const {path} = useRouteMatch()
    const [type, setType] = useState<string>('password')
    const [password, setPassword] = useState<string>('')

    const handleVisible = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    const handleChange = (e:any) => {
        setPassword(e.target.value)
    }

    const checkPassword = () => {
        if (password.length > 5) {
            history.push(`/admin/profile/new-password`)
            setPassword('')
        } else {
            console.log('password salah')
        }
    }

    return (
        <div  className="relative w-full px-5 py-4 max-w-full">
            <div>
                <h3 className="font-medium text-base text-gray-800 font-sans">
                    Ubah Password
                </h3>
            </div>

            <div className="mt-5 flex items-center">
                <div className="w-12 h-12 mr-6">
                    <img className="" src="https://cdn.discordapp.com/attachments/798894344962441267/812754976102285322/pngaaa.com-864976.png" alt="foto profile" />
                </div>
                <div>
                    <div>
                        <h1 className="font-medium text-base">Masukkan Password Lama</h1>
                    </div>
                    <div>
                        <h1 className="font-normal text-sm text-gray-500">Untuk melindungi keamanan akun anda, masukkan password lama anda</h1>
                    </div>
                </div>
            </div>

            <div className="mt-7 flex">
                <input type={type} placeholder="Masukkan password lama" className="font-normal text-sm w-full" onChange={handleChange}/>
                <button className="ml-4" onClick={handleVisible}>{type === 'password' ? 'S' : 'H'}</button>
            </div>

            <div className="mt-12 mb-3 flex justify-end">
                <button className="bg-blue-700 text-white py-1 w-1/3 rounded" onClick={checkPassword}>Lanjut</button>
            </div>



        </div>
    );
}
