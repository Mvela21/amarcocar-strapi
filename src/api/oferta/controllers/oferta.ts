import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::oferta.oferta', ({ strapi }) => ({
  async findActive(ctx) {
    const { brand = 'all' } = ctx.query;
    
    const entities = await strapi.entityService.findMany('api::oferta.oferta', {
      filters: {
        active: true,
        ...(brand !== 'all' && { brand }),
        validFrom: { $lte: new Date() },
        validTo: { $gte: new Date() }
      },
      sort: { priority: 'asc' },
      populate: ['image', 'imageMobile', 'contactInfo']
    });

    return { data: entities };
  },

  async findForHero(ctx) {
    const { brand = 'all', limit = 4 } = ctx.query;
    
    const entities = await strapi.entityService.findMany('api::oferta.oferta', {
      filters: {
        active: true,
        ...(brand !== 'all' && { brand }),
        validFrom: { $lte: new Date() },
        validTo: { $gte: new Date() }
      },
      sort: { priority: 'asc' },
      limit: parseInt(limit),
      populate: ['image', 'imageMobile', 'contactInfo']
    });

    return { data: entities };
  }
}));