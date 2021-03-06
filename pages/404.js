import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'
import Vanta from 'vanta/dist/vanta.globe.min'

export default function Custom404() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Vanta({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xde0787,
                color2: 0x8690e3,
                backgroundColor: 0xffffff
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
    <div ref={vantaRef} className={" absolute top-0 w-full h-full z-10"}>
        <div className={"flex flex-col justify-center items-center h-full"}>
            <div className={"text-xl font-semibold"}>
                404 - Page Not Found
            </div>
            <div>
                <Link href="/">
                    <a className={"mt-5 font-semibold"}>Back to Home</a>
                </Link> 
            </div>
        </div>
    </div>
    )
}
