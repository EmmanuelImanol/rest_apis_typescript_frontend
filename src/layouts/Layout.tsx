import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <header className='bg-slate-800'>
                <div className='mx-auto max-w-6xl w-[95%] py-10'>
                    <h1 className='text-4xl font-extrabold text-white'>
                        Administrador de Productos
                    </h1>
                </div>
            </header>

            <main className='mt-10 mx-auto max-w-6xl w-[95%] p-10 bg-white shadow-lg'>
                <Outlet />
            </main>
        </>
    )
}
