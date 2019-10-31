module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'plans',
      [
        {
          title: 'Fit',
          duration: 1,
          price: 129.0,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Health',
          duration: 3,
          price: 119.0,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Monster',
          duration: 6,
          price: 99.0,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Titan',
          duration: 12,
          price: 79.0,
          canceled_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
