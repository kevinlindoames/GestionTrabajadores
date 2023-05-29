import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import WarningButton from '@/Components/WarningButton';
import Swal from 'sweetalert2';


export default function Dashboard({ auth, trabajadores }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [operation, setOperation] = useState(1);
    const NombreInput = useRef();
    const ApellidoInput = useRef();
    const DniInput = useRef();
    const TelefonoInput = useRef();
    const DireccionInput = useRef();
    const CargoInput = useRef();
    const FechaInput = useRef();
    const { data, setData, delete: destroy, post, put, processing, reset, errors } = useForm({
        id: '', nombre: '', apellido: '', dni: '', telefono: '', direccion: '', cargo: '', fecha_de_incorporacion: ''
    });
    const openModal = (op, id, nombre, apellido, dni, telefono, direccion, cargo, fecha_de_incorporacion) => {
        setModal(true);
        setOperation(op);
        setData({ nombre: '', apellido: '', dni: '', telefono: '', direccion: '', cargo: '', fecha_de_incorporacion: '' });
        if (op === 1) {
            setTitle('Agregar Trabajador');
        }
        else {
            setTitle('Editar Trabajador');
            setData({ id: id, nombre: nombre, apellido: apellido, dni: dni, telefono: telefono, direccion: direccion, cargo: cargo, fecha_de_incorporacion: fecha_de_incorporacion });

        }
    }
    const closeModal = () => {
        setModal(false);
    }
    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route('trabajadores.store'), {
                onSuccess: () => { ok('Trabajador agregado correctamente') },
                onError: () => {
                    if (errors.nombre) {
                        reset('nombre');
                        NombreInput.current.focus();
                    }
                    if (errors.apellido) {
                        reset('apellido');
                        ApellidoInput.current.focus();
                    }
                    if (errors.dni) {
                        reset('dni');
                        DniInput.current.focus();
                    }
                    if (errors.telefono) {
                        reset('telefono');
                        TelefonoInput.current.focus();
                    }
                    if (errors.direccion) {
                        reset('direccion');
                        DireccionInput.current.focus();
                    }
                    if (errors.cargo) {
                        reset('cargo');
                        CargoInput.current.focus();
                    }
                    if (errors.fecha_de_incorporacion) {
                        reset('fecha_de_incorporacion');
                        FechaInput.current.focus();
                    }
                }
            });
        }
        else {
            put(route('trabajadores.update', data.id), {
                onSuccess: () => { ok('Trabajador editado correctamente') },
                onError: () => {
                    if (errors.nombre) {
                        reset('nombre');
                        NombreInput.current.focus();
                    }
                    if (errors.apellido) {
                        reset('apellido');
                        ApellidoInput.current.focus();
                    }
                    if (errors.dni) {
                        reset('dni');
                        DniInput.current.focus();
                    }
                    if (errors.telefono) {
                        reset('telefono');
                        TelefonoInput.current.focus();
                    }
                    if (errors.direccion) {
                        reset('direccion');
                        DireccionInput.current.focus();
                    }
                    if (errors.cargo) {
                        reset('cargo');
                        CargoInput.current.focus();
                    }
                    if (errors.fecha_de_incorporacion) {
                        reset('fecha_de_incorporacion');
                        FechaInput.current.focus();
                    }
                }
            });
        }
    }

    const ok = (mensaje) => {
        reset();
        closeModal();
        Swal.fire({ title: mensaje, icon: 'success' });
    }

    const eliminar = (id,nombre)=>{
        const alerta = Swal.mixin({buttonsStyling:true});
        alerta.fire({
            title: '¿Estas seguro de eliminar a '+nombre+'?',
            text: "No podras revertir esto",
            icon: 'warning',showCancelButton:true,
            confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar', 
            cancelButtonText:'<i class="fa-solid fa-ban"></i> No, cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            destroy(route('trabajadores.destroy', id),{onSuccess: () => { ok('Trabajador eliminado correctamente') }});            
        }
    });
}

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Trabajadores</h2>}
        >
            <Head title="Trabajadores" />

            <div className="bg-white grid v-screen place-items-center">
                <div className='mt-3 mb-3 flex justify-end'>
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i className='fa-solid fa-plus-circle'> Agregar Trabajador
                        </i>
                    </PrimaryButton>
                </div>
            </div>

            <div className="bg-white grid v-screen place-items-center py-6">

                <table className='table-auto border border-gray-400'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='px-2 py-2'>#</th>
                            <th className='px-2 py-2'>Nombre</th>
                            <th className='px-2 py-2'>Apellido</th>
                            <th className='px-2 py-2'>Dni</th>
                            <th className='px-2 py-2'>Telefono</th>
                            <th className='px-2 py-2'>Direccion</th>
                            <th className='px-2 py-2'>Cargo</th>
                            <th className='px-2 py-2'>Fecha de incorporacion</th>
                            <th className='px-2 py-2'></th>
                            <th className='px-2 py-2'></th>


                        </tr>
                    </thead>
                    <tbody>
                        {trabajadores.map((trabajador, i) => (
                            <tr key={trabajador.id}>
                                <td className='border border-gray-400 px-2 py-2'>{(i + 1)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{(trabajador.nombre)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{(trabajador.apellido)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{(trabajador.dni)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{(trabajador.telefono)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{(trabajador.direccion)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{(trabajador.cargo)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{(trabajador.fecha_de_incorporacion)}</td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <WarningButton
                                        onClick={() => openModal(2, trabajador.id, trabajador.nombre, trabajador.apellido, trabajador.dni, trabajador.telefono, trabajador.direccion, trabajador.cargo, trabajador.fecha_de_incorporacion)}>
                                        <i className='fa-solid fa-edit'></i>
                                    </WarningButton>
                                </td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <DangerButton
                                    onClick={()=> eliminar(trabajador.id,trabajador.nombre)}>
                                        <i className='fa-solid fa-trash'></i>
                                    </DangerButton>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {title}
                </h2>
                <form onSubmit={save} className="p-6">
                    <div className='mt-6'>
                        <InputLabel for="nombre" value="Nombre"></InputLabel>
                        <TextInput id="nombre" name="nombre" ref={NombreInput} value={data.nombre} required='required' handleChange={(e) => setData('nombre', e.target.value)} className="mt-1 block w-3/4" isFocused></TextInput>
                        <InputError message={errors.nombre} classNament-2></InputError>
                    </div>
                    <div className='mt-6'>
                        <InputLabel for="apellido" value="Apellido"></InputLabel>
                        <TextInput id="apellido" name="apellido" ref={ApellidoInput} value={data.apellido} required='required' handleChange={(e) => setData('apellido', e.target.value)} className="mt-1 block w-3/4" isFocused></TextInput>
                        <InputError message={errors.apellido} classNament-2></InputError>
                    </div>
                    <div className='mt-6'>
                        <InputLabel for="dni" value="Dni"></InputLabel>
                        <TextInput id="dni" name="dni" ref={DniInput} value={data.dni} required='required' handleChange={(e) => setData('dni', e.target.value)} className="mt-1 block w-3/4" isFocused></TextInput>
                        <InputError message={errors.dni} classNament-2></InputError>
                    </div>
                    <div className='mt-6'>
                        <InputLabel for="telefono" value="Telefono"></InputLabel>
                        <TextInput id="telefono" name="telefono" ref={TelefonoInput} value={data.telefono} required='required' handleChange={(e) => setData('telefono', e.target.value)} className="mt-1 block w-3/4" isFocused></TextInput>
                        <InputError message={errors.telefono} classNament-2></InputError>
                    </div>
                    <div className='mt-6'>
                        <InputLabel for="direccion" value="Direccion"></InputLabel>
                        <TextInput id="direccion" name="direccion" ref={DireccionInput} value={data.direccion} required='required' handleChange={(e) => setData('direccion', e.target.value)} className="mt-1 block w-3/4" isFocused></TextInput>
                        <InputError message={errors.direccion} classNament-2></InputError>
                    </div>
                    <div className='mt-6'>
                        <InputLabel for="cargo" value="Cargo"></InputLabel>
                        <TextInput id="cargo" name="cargo" ref={CargoInput} value={data.cargo} required='required' handleChange={(e) => setData('cargo', e.target.value)} className="mt-1 block w-3/4" isFocused></TextInput>
                        <InputError message={errors.cargo} classNament-2></InputError>
                    </div>
                    <div className='mt-6'>
                        <InputLabel for="fecha_de_incorporacion" value="Fecha de incorporacion"></InputLabel>
                        <TextInput id="fecha_de_incorporacion" name="fecha_de_incorporacion" ref={FechaInput} value={data.fecha_de_incorporacion} required='required' handleChange={(e) => setData('fecha_de_incorporacion', e.target.value)} className="mt-1 block w-3/4" isFocused></TextInput>
                        <InputError message={errors.fecha_de_incorporacion} classNament-2></InputError>
                    </div>

                    <div className='mt-6'>
                        <PrimaryButton processing={processing} className='mt-2'>
                            <i className='fa-solid fa-save'> Guardar</i>
                        </PrimaryButton>

                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                    </div>


                </form>
            </Modal>

        </AuthenticatedLayout>
    );
}
