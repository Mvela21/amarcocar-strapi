export default {
  routes: [
    {
      method: 'GET',
      path: '/ofertas/active',
      handler: 'oferta.findActive',
    },
    {
      method: 'GET',
      path: '/ofertas/hero',
      handler: 'oferta.findForHero',
    },
  ],
};
