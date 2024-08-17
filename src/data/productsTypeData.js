export const productsTypeData = [
  {
    id: 'natural',
    imageSrc: require('../Images/products/natural/naturalWhite.jpg'),
    type: 'Natural',
    price: 985,
    todayPrice: 689,
    discount: 30,
    aboutTitle:
      'Найпопулярніша модель нашого магазину, дихаюча та приємна тканина. Рукава мають волани на манжетах та зав`язку, завдяки якій можна регулювати довжину на руці. Спинка злегка подовжена. Прямий крій сорочки відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (
      <div>
        {/* <p>Переваги:</p>
      <p> - Легкі штани з гарною циркуляцією повітря;</p>
      <p> - Еластичні та зручні гумки для фіксації на широкому діапазоні параметрів;</p>
      <p> - Яскрава, нарядна та практична тканина;</p>
      <p> - Елементи легко комбінуються між собою та з іншим одягом.</p> */}
        <p>- Тканина: полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#000', '#967b64', '#0000ff'],
    colorsImg: [
      {
        id: 'naturalWhite',
        img: require('../Images/products/natural/naturalWhite.jpg'),
        colorName: 'Білий',
      },

      {
        id: 'naturalBlue',
        img: require('../Images/products/natural/naturalBlue.jpg'),
        colorName: 'Синій',
      },
      {
        id: 'naturalBlack',
        img: require('../Images/products/natural/naturalBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'naturalBezevy',
        img: require('../Images/products/natural/naturalBezevy.jpg'),
        colorName: 'Бежевий',
      },
      {
        id: 'naturalBlack2',
        img: require('../Images/products/natural/naturalBlack2.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'naturalWhite2',
        img: require('../Images/products/natural/naturalWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'naturalBlue2',
        img: require('../Images/products/natural/naturalBlue2.jpg'),
        colorName: 'Синій',
      },
      {
        id: 'naturalWhite3',
        img: require('../Images/products/natural/naturalWhite3.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56', '58-60'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>Ваш обхват грудей</th>
              <th>Обхват грудей виробу</th>
              <th>Довжина позаду</th>
              <th>Довжина попереду</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>42-44</td>
              <td>84-96 см</td>
              <td>114 см</td>
              <td>78 см</td>
              <td>62 см</td>
            </tr>
            <tr>
              <td>46-48</td>
              <td>97-106 см</td>
              <td>118 см</td>
              <td>78 см</td>
              <td>62 см</td>
            </tr>
            <tr>
              <td>50-52</td>
              <td>107-116 см</td>
              <td>124 см</td>
              <td>80 см</td>
              <td>64 см</td>
            </tr>
            <tr>
              <td>54-56</td>
              <td>117-122 см</td>
              <td>132 см</td>
              <td>83 см</td>
              <td>68 см</td>
            </tr>
            <tr>
              <td>58-60</td>
              <td>120-135 см</td>
              <td>142 см</td>
              <td>83 см</td>
              <td>69 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'volani',
    imageSrc: require('../Images/products/volani/volaniWhite.jpg'),
    type: 'Volani',
    price: 955,
    todayPrice: 699,
    discount: 30,
    aboutTitle:
      'Сорочка в якій неймовірне все! Акцентний витягнутий комірець в поєднанні з прямими рукавами, котрі легким рухом перетворюються в ніжні, обʼємні фонарики котрі ви бачите на фото. Сорочка гарно сидить на будь якому типі фігури і доповнить ваш образ.',
    aboutText: (
      <div>
        <p>- Тканина: полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#967b64', '#0000ff'],
    colorsImg: [
      {
        id: 'volaniWhite',
        img: require('../Images/products/volani/volaniWhite.jpg'),
        colorName: 'Білий',
      },

      {
        id: 'volaniBlue',
        img: require('../Images/products/volani/volaniBlue.jpg'),
        colorName: 'Синій',
      },

      {
        id: 'volaniBezevy',
        img: require('../Images/products/volani/volaniBezevy.jpg'),
        colorName: 'Бежевий',
      },

      {
        id: 'volaniWhite2',
        img: require('../Images/products/volani/volaniWhite2.jpg'),
        colorName: 'Білий',
      },

      {
        id: 'volaniWhite3',
        img: require('../Images/products/volani/volaniWhite3.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-44', '46-48', '50-52'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>Обхват грудей виробу</th>
              <th>Ваш обхват грудей</th>
              <th>Довжина попереду</th>
              <th>Довжина по спинці</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>42-44</td>
              <td>104см</td>
              <td>88-100 см</td>
              <td>60 см</td>
              <td>60 см</td>
            </tr>
            <tr>
              <td>46-48</td>
              <td>112 см</td>
              <td>101-108 см</td>
              <td>62 см</td>
              <td>62 см</td>
            </tr>
            <tr>
              <td>50-52</td>
              <td>120 см</td>
              <td>109-116 см</td>
              <td>64 см</td>
              <td>64 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'longBlouse',
    imageSrc: require('../Images/products/longBlouse/longBlouseWhite.jpg'),
    type: 'Long-Blouse',
    price: 1070,
    todayPrice: 749,
    discount: 30,
    aboutTitle:
      'Легка сукня-сорочка з легкої та дихаючої бавовни. Рукава довгі, мають гудзики на манжетах, також є кишеня на грудях. Низ заокруглений із розрізами по боках, для візуального подовження ніг. Лінія плеча приспущена. Прямий крій сукні-сорочка відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (
      <div>
        <p>- Тканина: полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff'],
    colorsImg: [
      {
        id: 'longBlouseWhite',
        img: require('../Images/products/longBlouse/longBlouseWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'longBlouseWhite2',
        img: require('../Images/products/longBlouse/longBlouseWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'longBlouseWhite3',
        img: require('../Images/products/longBlouse/longBlouseWhite3.jpg'),
        colorName: 'Білий',
      },

      {
        id: 'longBlouseWhite4',
        img: require('../Images/products/longBlouse/longBlouseWhite4.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'longBlouseWhite5',
        img: require('../Images/products/longBlouse/longBlouseWhite5.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-46', '48-52'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-46</th>
              <th>48-52</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>110 см</td>
              <td>125 см</td>
            </tr>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>90-105 см</td>
              <td>105-120 см</td>
            </tr>
            <tr>
              <td>Довжина попереду</td>
              <td>82 см</td>
              <td>83 см</td>
            </tr>
            <tr>
              <td>Довжина позаду</td>
              <td>91 см</td>
              <td>95 см</td>
            </tr>
            <tr>
              <td>Довжина рукава</td>
              <td>74 см</td>
              <td>75 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'over2',
    imageSrc: require('../Images/products/over2/over2White.jpg'),
    type: 'Over2',
    price: 939,
    todayPrice: 657,
    discount: 30,

    fabricOptions: [
      {
        id: 'superSoft',
        fabric: 'Супер-софт',
        price: 939,
        todayPrice: 657,
      },
      {
        id: 'cotton',
        fabric: 'Полірована бавовна',
        price: 1210,
        todayPrice: 847,
      },
    ],
    colorsImgCotton: [
      {
        id: 'over2White',
        img: require('../Images/products/over2/over2White.jpg'),
        colorName: 'Білий',
      },
    ],
    aboutTitle:
      'Найелегантніша модель нашої лінійки. Можна носити як оверсайз так і більш приталено. Має дві кишені на грудях та розрізи з боків, завдяки яким сорочка вільно сидить в стегнах. А опущена лінія плеча додасть до образу легкості.',
    aboutText: (
      <div>
        <p>- Тканина:cупер-софт, полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', ' #ff0000', '#0000ff', '#000000'],
    colorsImg: [
      {
        id: 'over2White',
        img: require('../Images/products/over2/over2White.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'over2White2',
        img: require('../Images/products/over2/over2White2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'over2Red',
        img: require('../Images/products/over2/over2Red.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'over2Red2',
        img: require('../Images/products/over2/over2Red2.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'over2Blue',
        img: require('../Images/products/over2/over2Blue.jpg'),
        colorName: 'Синій',
      },
      {
        id: 'over2Blue2',
        img: require('../Images/products/over2/over2Blue2.jpg'),
        colorName: 'Синій',
      },
      {
        id: 'over2Black',
        img: require('../Images/products/over2/over2Black.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'over2White3',
        img: require('../Images/products/over2/over2White3.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56', '58-60'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>48-52</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>110 см</td>
              <td>125 см</td>
            </tr>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>90-105 см</td>
              <td>105-120 см</td>
            </tr>
            <tr>
              <td>Довжина попереду</td>
              <td>82 см</td>
              <td>83 см</td>
            </tr>
            <tr>
              <td>Довжина позаду</td>
              <td>91 см</td>
              <td>95 см</td>
            </tr>
            <tr>
              <td>Довжина рукава</td>
              <td>74 см</td>
              <td>75 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'lastivka',
    imageSrc: require('../Images/products/lastivka/lastivkaWhite.jpg'),
    type: 'Ластівка',
    price: 970,
    todayPrice: 679,
    discount: 30,

    fabricOptions: [
      {
        id: 'superSoft',
        fabric: 'Супер-софт',
        price: 970,
        todayPrice: 679,
      },
      {
        id: 'cotton',
        fabric: 'Полірована бавовна',
        price: 1270,
        todayPrice: 889,
      },
    ],
    colorsImgCotton: [
      {
        id: 'lastivkaWhite',
        img: require('../Images/products/lastivka/lastivkaWhite.jpg'),
        colorName: 'Білий',
      },
    ],
    aboutTitle:
      'Найоригінальніша модель нашої лінійки. Чудово сидить як оверсайз, так і злегка приталено.  Позаду має подовжену спинку, з боків розрізи на рівні стегон, для комфортного та вільного носіння без відчуття стиснення. Має одну кишеню зліва на грудях, приспущену лінію плеча та ґудзики на спинці для регулювання довжини розрізу.',
    aboutText: (
      <div>
        <p>- Тканина:cупер-софт, полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', ' #ff0000', '#2596be', '#0000ff', '#000000'],
    colorsImg: [
      {
        id: 'lastivkaWhite',
        img: require('../Images/products/lastivka/lastivkaWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lastivkaWhiteBlue',
        img: require('../Images/products/lastivka/lastivkaWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'lastivkaBlack',
        img: require('../Images/products/lastivka/lastivkaBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'lastivkaRed',
        img: require('../Images/products/lastivka/lastivkaRed.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'lastivkaBlue',
        img: require('../Images/products/lastivka/lastivkaBlue.jpg'),
        colorName: 'Синій',
      },

      {
        id: 'lastivkaWhite2',
        img: require('../Images/products/lastivka/lastivkaWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lastivkaRed2',
        img: require('../Images/products/lastivka/lastivkaRed2.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'lastivkaWhite3',
        img: require('../Images/products/lastivka/lastivkaWhite3.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lastivkaWhiteBlue2',
        img: require('../Images/products/lastivka/lastivkaWhiteBlue2.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'lastivkaBlack2',
        img: require('../Images/products/lastivka/lastivkaBlack2.jpg'),
        colorName: 'Чорний',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>48-52</th>
              <th>50-52</th>
              <th>54-56</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>110 см</td>
              <td>118 см</td>
              <td>126 см</td>
              <td>134 см</td>
            </tr>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>88-108 см</td>
              <td>106-116 см</td>
              <td>114-124 см</td>
              <td>122-130 см</td>
            </tr>
            <tr>
              <td>Довжина попереду</td>
              <td>68 см</td>
              <td>70 см</td>
              <td>72 см</td>
              <td>74 см</td>
            </tr>
            <tr>
              <td>Довжина по спині</td>
              <td>78 см</td>
              <td>80 см</td>
              <td>82 см</td>
              <td>82 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'baroko',
    imageSrc: require('../Images/products/baroko/barokoWhite.jpg'),
    type: 'Бароко',
    price: 941,
    todayPrice: 659,
    discount: 30,
    aboutTitle:
      'Ця блузка підкорить ваше серденько, прямий крій, спущена лінія плеча котра переходить в рукав реглан з ніжними воланчиками на замість манжету. Також дана модель має  центральну планку котра спадає ніжними лініями вниз і завдяки цьому візуально страдає обʼєм. І маленька родзинка це V-подібний виріз в поєднанні з комірцем сіткою.',
    aboutText: (
      <div>
        <p>- Тканина: супер-софт; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#000000'],
    colorsImg: [
      {
        id: 'barokoWhite',
        img: require('../Images/products/baroko/barokoWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'barokoBlack',
        img: require('../Images/products/baroko/barokoBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'barokoWhite2',
        img: require('../Images/products/baroko/barokoWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'barokoBlack2',
        img: require('../Images/products/baroko/barokoBlack2.jpg'),
        colorName: 'Чорний',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>46-48</th>
              <th>50-52</th>
              <th>54-56</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>82-96 см</td>
              <td>97-104 см</td>
              <td>105-109 см</td>
              <td>110-116 см</td>
            </tr>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>108 см</td>
              <td>114 см</td>
              <td>120 см</td>
              <td>124 см</td>
            </tr>

            <tr>
              <td>Довжина по спині</td>
              <td>60 см</td>
              <td>62 см</td>
              <td>64 см</td>
              <td>66 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'romance',
    imageSrc: require('../Images/products/romance/romanceWhite.jpg'),
    type: 'Romance',
    price: 989,
    todayPrice: 692,
    discount: 30,
    aboutTitle:
      'Приємна та м`яка сорочка з декоративними гудзиками попереду. Рукава довгі і мають петельку, завдяки якій можна вкоротити рукав. Злегка подовжена спинка додає невимушеності образу та допоможе прибрати недоліки фігури візуально зменшуючи сідниці та стегна. А завдяки прямому крою сорочка чудово виглядає на різних параметрах та типах фігури.',
    aboutText: (
      <div>
        <p>- Тканина: штапельний софт; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#00ff00', '#2596be'],
    colorsImg: [
      {
        id: 'romanceWhite',
        img: require('../Images/products/romance/romanceWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'romanceWhiteBlue',
        img: require('../Images/products/romance/romanceWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'romanceGreen',
        img: require('../Images/products/romance/romanceGreen.jpg'),
        colorName: 'Зелений',
      },
      {
        id: 'romanceWhite2',
        img: require('../Images/products/romance/romanceWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'romanceWhiteBlue2',
        img: require('../Images/products/romance/romanceWhiteBlue2.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'romanceGreen2',
        img: require('../Images/products/romance/romanceGreen2.jpg'),
        colorName: 'Зелений',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>46-48</th>
              <th>50-52</th>
              <th>54-56</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>108 см</td>
              <td>114 см</td>
              <td>124 см</td>
              <td>134 см</td>
            </tr>

            <tr>
              <td>Ваш обхват грудей</td>
              <td>88-103 см</td>
              <td>104-110 см</td>
              <td>111-119 см</td>
              <td>120-130 см</td>
            </tr>
            <tr>
              <td>Обхват стегон виробу</td>
              <td>112 см</td>
              <td>118 см</td>
              <td>128 см</td>
              <td>138 см</td>
            </tr>

            <tr>
              <td>Довжина</td>
              <td>74 см</td>
              <td>76 см</td>
              <td>76 см</td>
              <td>78 см</td>
            </tr>
            <tr>
              <td>Рукав</td>
              <td>53 см</td>
              <td>53 см</td>
              <td>54 см</td>
              <td>55 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'oversize',
    imageSrc: require('../Images/products/oversize/oversizeWhite.jpg'),
    type: 'Oversize',
    price: 842,
    todayPrice: 589,
    discount: 30,
    aboutTitle:
      'Базова м`яка сорочка з однією кишенею. Гарно підходить на офіційні та навчальні заходи, завдяки універсальному вигляду та фасону її також можна носити як сорочку-накидку на топи чи майки. Рукава довгі, манжети на гудзиках. Прямий крій сорочки та універсальний фасон чудово виглядає на різних параметрах та типах фігури, що спрощує підбір розміру не  ризикуючи стильним силуетом.',
    aboutText: (
      <div>
        <p>- Тканина: супер софт; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#000000', '#2596be'],
    colorsImg: [
      {
        id: 'oversizeWhite',
        img: require('../Images/products/oversize/oversizeWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'oversizeBlack',
        img: require('../Images/products/oversize/oversizeBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'oversizeWhite2',
        img: require('../Images/products/oversize/oversizeWhite2.jpg'),
        colorName: 'Білий',
      },
    
    ],
    sizes: ['S', 'M', 'L'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
          <tr>
              <th>Розмір</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
           
            </tr>
          <tr>
              <td>Довжина виробу</td>
              <td>69 см</td>
              <td>72 см</td>
              <td>75 см</td>
                      </tr>
                      <tr>
              <td>Довжина рукава</td>
              <td>58,5 см</td>
              <td>60 см</td>
              <td>61 см</td>
            </tr>
           
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>98 см</td>
              <td>104 см</td>
              <td>114 см</td>
            </tr>

            <tr>
              <td>Ваш обхват грудей</td>
              <td>85-97 см</td>
              <td>97-103 см</td>
              <td>103-113 см</td>
            </tr>
           

          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'classic',
    imageSrc: require('../Images/products/classic/classicWhite.jpg'),
    type: 'Classic',
    price: 842,
    todayPrice: 589,
    discount: 30,
    aboutTitle:
      'Класична та елегантна якісна сорочка з довгими рукавами. Гудзики приховані за планкою, додаючи зовнішньому вигляду естетичної лаконічності. Сорочка завдяки своєму стриманому вигляду чудово підходить для офіційних та навчальних закладів. Прямий крій сорочки відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури та параметрах.',
    aboutText: (
      <div>
        <p>- Тканина: супер софт; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
        <p>
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#000000', '#2596be','#0000ff'],
    colorsImg: [
      {
        id: 'classicWhite',
        img: require('../Images/products/classic/classicWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'classicBlack',
        img: require('../Images/products/classic/classicBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'classicWhite2',
        img: require('../Images/products/classic/classicWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'classicBlack2',
        img: require('../Images/products/classic/classicBlack2.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'classicBlack3',
        img: require('../Images/products/classic/classicBlack3.jpg'),
        colorName: 'Чорний',
      },
     
    
    ],
    sizes: ['XS', 'S', 'M', 'L','XL'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Довжина виробу</td>
              <td>65 см</td>
              <td>66,5 см</td>
              <td>68,5 см</td>
              <td>70 см</td>
              <td>72,5 см</td>
            </tr>
            <tr>
              <td>Довжина рукава</td>
              <td>57 см</td>
              <td>58,5 см</td>
              <td>60 см</td>
              <td>61,5 см</td>
              <td>63 см</td>
            </tr>

            <tr>
              <td>Обхват грудей виробу</td>
              <td>90 см</td>
              <td>94 см</td>
              <td>100 см</td>
              <td>110 см</td>
              <td>120 см</td>
            </tr>

            <tr>
              <td>Ваш обхват грудей</td>
              <td>80-89 см</td>
              <td>89-93 см</td>
              <td>93-99 см</td>
              <td>99-109 см</td>
              <td>109-119 см</td>
            </tr>
                       
          </tbody>
        </table>
      </div>
    ),
  },
];
