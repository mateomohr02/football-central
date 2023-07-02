const validate = (form) => {
    let errors = {}

    if( !form.name || /\d/.test(form.name)){
        errors.name = 'El nombre del producto no puede estar vacío o contener números.'
    }
    if( !form.price || !/\d/.test(form.price)){
        errors.price = 'El precio del producto no puede estar vacío y sólo debe contener números.'
    }
    if( !form.description){
        errors.description = 'La descripción del producto no puede estar vacía.'
    }
    if( !form.sku){
        errors.sku = 'El SKU del producto no puede estar vacío.'
    }
    if( !form.stock || /^\d+$/.test(form.name)){
        errors.stock = 'La cantidad de stock del producto no puede estar vacía y sólo debe contener números.'
    }
    if( !form.category || /\d/.test(form.name)){
        errors.category = 'La categoría del producto no puede estar vacío o contener números.'
    }
    if( !form.brand){
        errors.brand = 'La marca del producto no puede estar vacía.'
    }
    if( !form.image_path){
        errors.image_path = 'El producto debe tener una imágen'
    }

    return errors;
} 

export default validate