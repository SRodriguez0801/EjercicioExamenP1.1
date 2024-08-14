function calcular() {
    const producto1 = parseFloat(document.getElementById('producto1').value) || 0;
    const producto2 = parseFloat(document.getElementById('producto2').value) || 0;
    const producto3 = parseFloat(document.getElementById('producto3').value) || 0;
    const producto4 = parseFloat(document.getElementById('producto4').value) || 0;
    const producto5 = parseFloat(document.getElementById('producto5').value) || 0;
  
    if (producto1 === 0 || producto2 === 0 || producto3 === 0 || producto4 === 0 || producto5 === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos deben ser completados con valores numéricos!',
        });
        return;
    }
  
         
    const subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
    let descuento = 0;
    let descuentoLabel = 'Descuento 0%';

    if (subtotal >= 1000 && subtotal < 5000) {
        descuento = subtotal * 0.10;
        descuentoLabel = 'Descuento 10%';
    } else if (subtotal >= 5000 && subtotal < 9000) {
        descuento = subtotal * 0.20;
        descuentoLabel = 'Descuento 20%';
    } else if (subtotal >= 9000 && subtotal < 13000) {
        descuento = subtotal * 0.30;
        descuentoLabel = 'Descuento 30%';
    } else if (subtotal >= 13000) {
        descuento = subtotal * 0.40;
        descuentoLabel = 'Descuento 40%';
    }

    const total = subtotal - descuento;

    document.getElementById('subtotal').value = 'L' + subtotal.toFixed(2);
    document.getElementById('descuento').value = 'L' + descuento.toFixed(2);
    document.getElementById('total').value = 'L' + total.toFixed(2);
    document.getElementById('descuentoLabel').innerText = descuentoLabel;
}

function limpiar() {
    document.getElementById('descuentoForm').reset();
    document.getElementById('subtotal').value = '';
    document.getElementById('descuento').value = '';
    document.getElementById('total').value = '';
    document.getElementById('descuentoLabel').innerText = 'Descuento 0%';
}
//t32321092_StevenRodriguez