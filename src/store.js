import { reactive } from 'vue'
import axios from "axios";

export const store = reactive({
    loading_cards: true,
    loading_archetypes: true,
    API_URL_CARD: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    API_URL_ARCHETYPE: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cards: null,
    archetypes: null,
    filter: "",

});