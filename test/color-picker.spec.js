// Импортируем Vue и тестируемый компонент
import {
  mount
} from 'vue-test-utils';
import colorPicker from '../src/color-piсker/color-piсker.vue';

describe(`colorPickerDefault`, () => {
  /* Монтирование и прикрепление к DOM */
  const wrapper = mount(colorPicker, {
    attachToDocument: true
  });
  /* Определить кликабельные эл. цветов */
  const grey = wrapper.find('[value="grey"]');
  const black = wrapper.find('[value="black"]');
  const saddlebrown = wrapper.find('[value="saddlebrown"]');

  it('Установлены параметры по умолчанию', async () => {
    const defaultData = wrapper.props().data;
    await wrapper.vm.$nextTick();
    expect(defaultData.color).toEqual(["black", "grey", "saddlebrown", "whitesmoke", "navajowhite"]);
  });

  it('При отсутствии выбранных цветов возвращается пустой массив', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.whatIsSelect()).toEqual([]);
  });

  it('Нажатие по элементу возвращет цвета всех нажатых элементов', async () => {
    grey.trigger('click');
    black.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.whatIsSelect()).toEqual(["grey", "black"]);
  });

  it('Двойной клик по цвету сбрасывает его', async () => {
    saddlebrown.trigger('click');
    saddlebrown.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.whatIsSelect()).toEqual(["grey", "black"]);
  });

  /* Отсоединяем от DOM */
  wrapper.destroy();
});

describe(`validate props`, () => {
  it('установить новые корректные входные параметры', () => {
    const wrapper = mount(colorPicker, {
      propsData: {
        data: {
          color: ["black"]
        }
      }
    });
    expect(wrapper.props().data.color).toEqual(["black"])
  });

  it('Проверить функцию валидации входных параметров установив несуществующий цвет', () => {
    expect(function () {
      mount(colorPicker, {
        propsData: {
          data: {
            color: ["der122"]
          }
        }
      });
    }).toThrow(new Error('допустимы только значения определенных цветов, см. colorDictionary.js'));
  });
});