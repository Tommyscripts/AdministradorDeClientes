const STORAGE_KEY = 'clientes';
const CLIENTES_INICIALES = [
    {
        id: 1,
        nombre: 'Gato',
        empresa: 'Peludos al poder',
        email: 'peludos@alpoder.com',
        telefono: '655444333',
        notas: 'Los gatos son hermosos'
    }
];

function leerClientes() {
    const guardados = localStorage.getItem(STORAGE_KEY);

    if (!guardados) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(CLIENTES_INICIALES));
        return CLIENTES_INICIALES;
    }

    try {
        const clientes = JSON.parse(guardados);
        return Array.isArray(clientes) ? clientes : [];
    } catch (error) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(CLIENTES_INICIALES));
        return CLIENTES_INICIALES;
    }
}

function guardarClientes(clientes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clientes));
}

function siguienteId(clientes) {
    if (!clientes.length) return 1;
    return Math.max(...clientes.map((cliente) => Number(cliente.id) || 0)) + 1;
}

export async function obtenerClientes(){
    return leerClientes();
}

export async function obtenerCliente(id){
    const clientes = leerClientes();
    return clientes.find((cliente) => String(cliente.id) === String(id)) ?? {};
}

export async function agregarCliente(datos){
    const clientes = leerClientes();
    const nuevoCliente = { ...datos, id: siguienteId(clientes) };
    guardarClientes([...clientes, nuevoCliente]);
    return nuevoCliente;
}

export async function actualizarCliente(id, datos){
    const clientes = leerClientes();
    const actualizados = clientes.map((cliente) =>
        String(cliente.id) === String(id)
            ? { ...cliente, ...datos, id: cliente.id }
            : cliente
    );
    guardarClientes(actualizados);
}

export async function eliminarCliente(id){
    const clientes = leerClientes();
    const filtrados = clientes.filter((cliente) => String(cliente.id) !== String(id));
    guardarClientes(filtrados);
}