
export interface Food {
    // le modele permet la reprsentation des données ! 
    // grace à l'interface food les données respecteront cet ordre
    id: number;
    title: string;
    description?: string;
    price: number;
}