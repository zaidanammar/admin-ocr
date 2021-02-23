import React, {useState} from "react";

export default function NewPassword() {
    const [type, setType] = useState<string>('password')
    const [retype, setRetype] = useState<string>('password')
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRepassword] = useState<string>('')

    const handleVisible = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    const handleVisibleRetype = () => {
        if (retype === 'password') {
            setRetype('text')
        } else {
            setRetype('password')
        }
    }

    const handlePassword = (e:any) => {
        setPassword(e.target.value)
    }

    const handleRepassword = (e:any) => {
        setRepassword(e.target.value)
    }

    const checkPassword = () => {
        if (password.length > 5 && rePassword.length > 5 && password === rePassword) {
            console.log('masuk')
        } else {
            console.log('salah')
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
                        <h1 className="font-medium text-base">Masukkan Password Baru</h1>
                    </div>
                    <div>
                        <h1 className="font-normal text-sm text-gray-500">Password akan digunakan untuk login, Masukkan minimal 6 karakter</h1>
                    </div>
                </div>
            </div>

            <div className="mt-7 flex">
                <input type={type} placeholder="Masukkan password baru" onChange={handlePassword} className="font-normal text-sm w-full"/>
                <button className="ml-4" onClick={handleVisible}>{type === 'password' ? 'S' : 'H'}</button>
            </div>
            <div className="mt-3 flex">
                <input type={retype} placeholder="Konfirmasi password baru" onChange={handleRepassword} className="font-normal text-sm w-full"/>
                <button className="ml-4" onClick={handleVisibleRetype}>{retype === 'password' ? 'S' : 'H'}</button>
            </div>
            <div className="mt-3 flex">
                {password === rePassword ? "" : <h1 className="text-red-500 font-normal text-xs">Terjadi kesalahan</h1> }
            </div>

            <div className="mt-12 mb-3 flex justify-end">
                <button className="bg-blue-700 text-white py-1 w-1/3 rounded" onClick={checkPassword}>konfirmasi</button>
            </div>



        </div>
    );
}
