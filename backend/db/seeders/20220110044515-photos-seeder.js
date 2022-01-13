'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [    
      {
        userId: 2,
        photoUrl: "https://images.unsplash.com/photo-1537211568975-f95f2101c8f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        caption: "Aiguille du Midi",
        isPublic: true
      },
      {
        userId: 5,
        photoUrl: "https://images.unsplash.com/photo-1538605971-a32a89ee6bde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        caption: "The wonder of The Hooker Glacier and glacial lake and the fret of Mt Cook, NZ. In winter the lake is iced over and some adventurous souls walk out onto it, not me though I’d rather view from afar.",
        isPublic: true
      },
      {
        userId: 9,
        photoUrl: "https://images.unsplash.com/photo-1533101062-8970cf1aabf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        caption: "The beautiful views of the Hooker Valley Track are so special. Winter is the best time of year to go for snow capped peaks and an adventurous walk to the glacier.",
        isPublic: true
      },
      {
        userId: 1,
        photoUrl: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
        caption: "New Zealand",
        isPublic: true
      },
      {
        userId: 5,
        photoUrl: "https://images.unsplash.com/photo-1534366428-e54c1db0bed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        caption: "Standing before the beautiful views of the glacial Hooker Lake is so special. Winter iced over the lake waters making it even more magical.",
        isPublic: true
      },
      {
        userId: 6,
        photoUrl: "https://images.unsplash.com/photo-1639896773569-ba2bde2f9164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
        caption: "",
        isPublic: true
      },
      {
        userId: 4,
        photoUrl: "https://images.unsplash.com/photo-1638309025319-239aecdb2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        caption: "Iceland road trip mood travellers",
        isPublic: true
      },
      {
        userId: 7,
        photoUrl: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
        caption: "Shot on Canon, EOD 6D",
        isPublic: true
      },
      {
        userId: 6,
        photoUrl: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
        caption: "Searching...",
        isPublic: true
      },
      {
        userId: 1,
        photoUrl: "https://images.unsplash.com/photo-1483575995838-3f59d40ea156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80",
        caption: "Skyline arch",
        isPublic: true
      },

      {
        userId: 3,
        photoUrl: "https://images.unsplash.com/photo-1506773090264-ac0b07293a64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        caption: "This photo was captured on an adventure across the beautiful Namibian landscape, in Africa. Endless rolling dunes shadowed shapes onto the sand as far as the eye could see. The only trace of life is left in the wake of footprints briefly following your lead, before being swept away by the wind. What a beautiful place.",
        isPublic: true
      },
      {
        userId: 1,
        photoUrl: "https://images.unsplash.com/photo-1637580980556-085dee659c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        caption: "Mt. Fitz Roy on sunrise",
        isPublic: true
      },
      {
        userId: 5,
        photoUrl: "https://images.unsplash.com/photo-1564371637326-768793b60f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        caption: "Elk with his tongue out. Marmot Point, Rocky Mountain National Park.",
        isPublic: true
      },
      {
        userId: 7,
        photoUrl: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        caption: "This picture is part of a set of photos that were taken towards the end of the summer to realize one of my projects that was close to my heart: making a calendar for the coming year. Because I like to admire the colour and textures, vegetables are an excellent choice because they can offer a whole show for the eyes all year round! Visit my website this calendar named Harvest Collection!",
        isPublic: true
      },
      {
        userId: 9,
        photoUrl: "https://images.unsplash.com/photo-1637354390131-37b41d14b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        caption: "Perfect symmetry",
        isPublic: true
      },
      {
        userId: 8,
        photoUrl: "https://images.unsplash.com/photo-1641829108041-e94a7d3537a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        caption: "My Husky",
        isPublic: true
      },
      {
        userId: 1,
        photoUrl: "https://images.unsplash.com/photo-1639733755368-7d0b2507e429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        caption: "Minimal mood.",
        isPublic: true
      },
      {
        userId: 6,
        photoUrl: "https://images.unsplash.com/photo-1641906998681-b8fb47994afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        caption: "One of my wedding couples",
        isPublic: true
      },
      {
        userId: 7,
        photoUrl: "https://images.unsplash.com/photo-1638720772346-b745bcd72f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80",
        caption: "Avocado Toast From series Taste for Adventure",
        isPublic: true
      },
      {
        userId: 1,
        photoUrl: "https://images.unsplash.com/photo-1641896475683-94641e3b2bed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        caption: "Mandarines on a wooden saw cut",
        isPublic: true
      },
      {
        userId: 3,
        photoUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        caption: "Work flow",
        isPublic: true
      },
      {
        userId: 5,
        photoUrl: "https://images.unsplash.com/photo-1641921402984-80bb92e69e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        caption: "Editorial",
        isPublic: true
      },
      {
        userId: 1,
        photoUrl: "https://images.unsplash.com/photo-1576777486781-4fc7184eb4f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80",
        caption: "",
        isPublic: true
      },
      {
        userId: 7,
        photoUrl: "https://images.unsplash.com/photo-1641747190513-c461cf7ed914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        caption: "Made with Blender + Photoshop for the Collage Effect",
        isPublic: true
      },
      {
        userId: 2,
        photoUrl: "https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        caption: "Beautiful morning at Andenes",
        isPublic: true
      },
      {
        userId: 5,
        photoUrl: "https://images.unsplash.com/photo-1641679644331-0b52e184c0f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
        caption: "Trinity Alps, California, USA",
        isPublic: true
      },
      {
        userId: 8,
        photoUrl: "https://images.unsplash.com/photo-1640264974125-ce9c3ebcfe22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
        caption: "Essentials",
        isPublic: true
      },
      {
        userId: 3,
        photoUrl: "https://images.unsplash.com/photo-1641063157251-ae9d815e5daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
        caption: "",
        isPublic: true
      },
      {
        userId: 4,
        photoUrl: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        caption: "",
        isPublic: true
      },
      {
        userId: 2,
        photoUrl: "https://images.unsplash.com/photo-1639755507638-e34150b56db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Vercel Mug",
        isPublic: true
      },
      {
        userId: 10,
        photoUrl: "https://images.unsplash.com/photo-1641979284150-c0a5fae70674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        caption: "Trees freshly dusted in snow catch the early morning sun.",
        isPublic: true
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
