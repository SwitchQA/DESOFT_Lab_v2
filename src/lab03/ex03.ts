//ex.3
//questions
//1. how to delete line 7?
//2. verify line 23

export function productDescription(itemCode: number): string {

    let description: string = 'Código Inválido'; 
    
    if (itemCode == 1) {
        description = 'Alimento não perecível';
    } else if (itemCode <= 4) {
        description = 'Alimento perecível';
    } else if (itemCode <= 6) {
        description = 'Vestuário';
    } else if (itemCode == 7) {
        description = 'Higiene pessoal';
    } else if (itemCode >= 8 && itemCode <= 15) { // should this if be deleted?
        description = 'Limpeza e utensílios domésticos'
    }
    
    return description; //is it ok to have ! here?
}
