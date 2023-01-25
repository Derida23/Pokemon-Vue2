<template>
  <div class="pokemon">
    <template v-if="pokemon">
      <h2>N°{{ pokemon.id }} {{ pokemon.name.toUpperCase() }}</h2>
      <img
        v-if="pokemon.sprites.front_default"
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
      />
      <p>
        <strong>Tipo:</strong>
        <span
          class="type"
          :class="type.type.name"
          v-for="(type, index) in pokemon.types"
          :key="index"
        >
          {{ changeLangType(type.type.name) }}
        </span>
      </p>

      <div class="stats">
        <div class="stat" v-for="(stat, index) in pokemon.stats" :key="index">
          <p>{{ changeLangStats(index) }}</p>
          <div class="bar_container">
            <div class="bar" :style="'width:' + stat.base_stat + 'px'">
              {{ stat.base_stat }}
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="queryEmpty">
      <p>Deberías escribir algo...</p>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PokemonComponent",
  data() {
    return {
      types_api: [
        { en: "normal", es: "normal" },
        { en: "fighting", es: "lucha" },
        { en: "flying", es: "volador" },
        { en: "poison", es: "veneno" },
        { en: "ground", es: "tierra" },
        { en: "rock", es: "roca" },
        { en: "bug", es: "bicho" },
        { en: "ghost", es: "fantasma" },
        { en: "steel", es: "acero" },
        { en: "fire", es: "fuego" },
        { en: "water", es: "agua" },
        { en: "grass", es: "hierba" },
        { en: "electric", es: "eléctrico" },
        { en: "psychic", es: "psíquico" },
        { en: "ice", es: "hielo" },
        { en: "dragon", es: "dragón" },
        { en: "dark", es: "oscuridad" },
        { en: "fairy", es: "hada" },
      ],
      stats_api: [
        { en: "hp", es: "vida" },
        { en: "attack", es: "ataque" },
        { en: "defense", es: "defensa" },
        { en: "special-attack", es: "ataque especial" },
        { en: "special-defense", es: "defensa especial" },
        { en: "speed", es: "velocidad" },
      ],
    };
  },
  computed: {
    ...mapState(["pokemon", "queryEmpty"]),
  },
  methods: {
    changeLangType(type) {
      for (let index = 0; index < this.types_api.length; index++) {
        if (type === this.types_api[index].en) {
          return this.types_api[index].es;
        }
      }
    },
    changeLangStats(index) {
      return this.stats_api[index].es;
    },
  },
};
</script>

<style scoped>
.pokemon {
  text-align: center;
}
.stats {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 30px 0;
}
.stat {
  margin: 10px 0;
}
.stat p {
  margin: 0 0 2px 0;
}
.bar_container {
  position: relative;
  width: 266px;
  border: 1px solid #e3350d;
  height: 26px;
}
.bar {
  text-align: left;
  display: block;
  position: relative;
  background: #e3350d;
  color: #ffffff;
  padding: 4px 8px;
}
.grafico .barra span {
  position: absolute;
  left: 1em;
}
</style>
