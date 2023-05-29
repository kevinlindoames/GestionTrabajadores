<?php

namespace App\Http\Controllers;

use App\Models\Trabajadores;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrabajadoresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $trabajadores = Trabajadores::all();
        return Inertia::render('Trabajadores/index',['trabajadores'=>$trabajadores]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request-> validate([

            'nombre' => 'required|max:50',
            'apellido' => 'required|max:50',
            'dni' => 'required|max:50',
            'telefono' => 'required|max:50',
            'direccion' => 'required|max:50',
            'cargo' => 'required|max:50',
            'fecha_de_incorporacion' => 'required|max:50'
        ]);
        $trabajador = new Trabajadores($request->input());
        $trabajador->save();
        return redirect('trabajadores');
    }

   
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $trabajador = Trabajadores::find($id);
        $trabajador->fill($request->input())->saveOrFail();
        return redirect('trabajadores');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $trabajador = Trabajadores::find($id);
        $trabajador->delete();
        return redirect('trabajadores');
    }
}
