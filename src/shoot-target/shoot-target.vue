<template>
  <div class="shoot">
    <canvas
      height="630"
      width="630"
      id="target"
      v-on:click="setShoot"
      ref="canva"
    >
      Браузер не поддерживает canvas, обновитесь</canvas
    >
    <!-- v-bind:height="data.height" v-bind:width='data.width' -->
  </div>
</template>

<script>
import targetSrc from "./support/target-base64.js";
export default {
  name: "shootTarget",
  props: {
    maxShoots: {
      type: String,
      default: `10`,
    },
    exercise: {
      type: String,
      default: `2`,
    },
  },
  data() {
    return {
      ctx: "",
      shoot: {
        count: 0,
        values: [],
        sum: "",
        mark: "",
        x: [],
        y: [],
      },
    };
  },
  computed: {},
  methods: {
    getShootValue(x, y) {
      const validator = (x, y, r) => {
        return (x - 315) ** 2 + (y - 315) ** 2 <= r ** 2 ? true : false;
        // Попадание имеет координаты (x, y), центр круга (X1, Y1), радиус круга R
        // Тогда формула для рассчета попадания точки в круг ((x - X1)^2 + (y - Y1)^2) <= R^2
      };
      if (((x < 183 || x > 453) && y < 228) || y > 603 || x < 24 || x > 610) {
        // белые граници мишени
        return 0;
      } else if (validator(x, y, 60)) {
        return 10;
      } else if (validator(x, y, 120)) {
        return 9;
      } else if (validator(x, y, 180)) {
        return 8;
      } else if (validator(x, y, 238)) {
        return 7;
      } else if (validator(x, y, 298)) {
        return 6;
      } else return 5;
    },
    result(values) {
      const sum = values.reduce((acc, item) => acc + item);
      const max = values.length * 10;
      const percent = (sum / max) * 100;
      switch (this.exercise) {
        case "1":
          return percent < 60 ? 2 : percent < 70 ? 3 : percent < 83 ? 4 : 5;
          break;
        case "3":
          return percent < 65 ? 2 : percent < 75 ? 3 : percent < 85 ? 4 : 5;
          break;
        default:
          return percent < 60 ? 2 : percent < 70 ? 3 : percent < 80 ? 4 : 5;
          break;
          break;
      }
    },
    sumOfShoots(values) {
      return values.reduce((acc, item) => acc + item);
    },
    setShoot() {
      if (this.shoot.count == this.maxShoots) {
        /* Или кастомный алерт */
        alert("Занесены все выстрелы!");
        return;
      }
      const x = event.layerX;
      const y = event.layerY;
      this.shoot.x.push(x);
      this.shoot.y.push(y);
      this.shoot.values.push(this.getShootValue(x, y));
      this.shoot.mark = this.result(this.shoot.values);
      this.shoot.sum = this.sumOfShoots(this.shoot.values);
      this.shoot.count += 1;
      this.$emit("shoot", this.shoot);
      const img = new Image();
      /* img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmklEQVR42lVRO2tiYRQczJIQ1JtiG1HxLb5yxQfiq9BFRYjiA7G4CkJip52gWyhqo/hAbax2If8gZcr8i00dEshPCAtLlrPnu7CBFMO5HObOzHcGs9kMArvdDsfjEZ1O51uz2bzY7/fYbDZYr9dYrVbAcrlUF/1+H8ViUU6n079yudxjuVzODwaDL8PhUDcajc7AH1K73T4xmUy5Uqn0FI/HiSf5/f53ns9Op/PWYrFIsNvtV3q9/j6bzVKhUCCr1Uo2m41CoRAlEgli0nA8HgOyLLdqtdp7vV4n/oEAqNBqtZRMJqlSqTyw8ld4vd7rarX6FgwGP0j/YTabKRwOv/K0wGg0fmfbP263+xNJo9GoEVwu1ws7XSISifhY/imTyZBOp/sgSZKkWiuK8mgwGIDJZHKWz+fvotGosBHhiR9I3W6XWq0WeTyen7FYDFgsFuAFOOOcFf6mUqnfHP5NkAKBwA+Hw3Eu7oz5fI7D4YBGoyFOJft8PoVveMOZFYZZCIlS1PoEWSxEXVwfOMJpr9cD22O73WI6neIfhwecbs7wzQYAAAAASUVORK5CYII=";  ЭТО 10 на 12, кажется маловато*/
      img.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEM0lEQVR42n1VSUhkVxS9/1eVWo7lLJbzPM/zPMZZ4jyjosSgGBUE56ksJ1TQhU12nbjIPmSTTRNCL7IMZJNVExJJQ0N6ERo66ar/38u5H6qTJp0sbr2q+u+ec+746fDwkNgODg6Mc39/n3Z3d+n4+JguLi6oq6tremBggG5ubujs7Mx4zsb3PT58kgfIA8IA5+fn6ubmpjI7O1tfWlr6PC8v77OGhobWpaUlP34OU46OjlQ2DyB/KPyFQU5OTtS1tTVzY2MjZWRkLJaUlHxXVVX1qqOjQ/b398vU1NSrtrY22t7epo2NDQIZAYycTicZH8wAFdTb20teXl5kNpvTxsfHf25qapIRERHuvr4+19jYmA6gX4uKir6Bwq96enpuExMTHycnJx/FxsYSzc/P21dWVmhwcNDHz8/vw9zc3D58f4H/JBw0OMrh4WGZk5MjEJ4sKCiQUCwdDocEwI9E1JuVlUUUExPTFRYWduvt7f1Bdnb26+7u7t85DCjS8vPzJRgFTlFTUyOLi4t1AGvl5eV/dnZ2uqDeCWAuioXARgEBAU/tdvurioqKP+rq6gxnKJDx8fEiJCSETUZGRsqEhATJgCB0s9LAwMCv29vb6e7uzkwtLS1hkHjLF6DGDTU6g0ClMJlMUlVVw5A3idBlXFyc4JAnJyf5/B7khTs7OyYKDg5uHh0d/Wlubk5bX1/XEb+Ijo6WiqJIxP+OMWBQUJBMT08XqCTfl0NDQ19AcSJXKRM/fuC8NDc3a0ic9PHx+ReIx3x9fSXSwGTutLQ0t8ViGUGBiOBECOtLZkHzuZKSkgSH8V9AcGQwAUIN9yUK8RS5s1J4eHhJYWHhA0ouUAEdiRT/p8jf39/IH5LthhKBgjxBxW0UFRVVB+SH6elp7hE9JSVF2my29+aIlaIwbDq3BKr7Enc/BnEA1dfXm8BSUVtb+3xhYUEvKyvTwWjkwgPGJ4NYrVbudIHeE4uLi26Mxxv4foTcEq2urtLy8vIBBlTHXL2BsWzBCUWfyNDQUMEA6CPuLYFycz/pmEP3/f29xJgsV1ZWEmGiCeMwNzEx8YwbDl2rQ6XhhEsCOdORB4nkCvSZRPOJkZERHhkNz5+AJB8+RJeXl4ShJIQD0kgHvkuwiszMTA1MfEo+eQNArev6+lpeXV09gOBbtE4DcqoyhrE+sAFU3gJoA0Ib7Le2tmrYBBL2Gkl9NjU1JVHVXzB/v2EjuFDpz1GpbJCHbG1t/b3YGAyngolW8FAFmxPVdCA/O6jkpwB4yVMORY+xPl4gweVoGcLuIvjQ3t4evV2X/INVzczMmFAhf76IhBM6uBOqHgGY0Dc2zNonKHcoxkPh1ct+7P/OvuaTGXDJWHa8PRGuHQoqMUbK6empEX51dbXFE8nbVfu+5Q9lCr8AmBH9AoFmK4Nz6HgJqPwi+KcP219p2AZOXw2FLgAAAABJRU5ErkJggg==";
      img.onload = () => {
        // Событие onLoad, ждём момента пока загрузится изображение
        this.ctx.drawImage(img, x - 9, y - 11);
        // Рисуем изображение от точки с координатами, минусы чтобы
        // центр выстрела совпадал с центров клика
      };
    },
  },
  mounted() {
    const target = this.$refs.canva;
    this.ctx = target.getContext("2d");
    const img = new Image();
    img.src = targetSrc;
    img.onload = () => {
      // Событие onLoad, ждём момента пока загрузится изображение
      this.ctx.drawImage(img, 0, 0); // Рисуем изображение от точки с координатами 0, 0
    };
  },
};
</script>

<style scoped></style>
