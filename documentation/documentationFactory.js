'use strict';

angular.module('angular-wakanda-website')
  .factory('documentationFactory', function () {

    var availableDoc = [
      'quickstart'
    ];

    function isAvailableDocPage(page, subpage) {
      var links = docPagesLinks();

      for (var i = 0; i < links.length; i++) {
        var pageInUrl = links[i].url.replace('#/doc/', '');

        if (pageInUrl === page && !subpage) {
          return true;
        }
        else if(pageInUrl === page && links[i].children) {
          for (var j = 0; j < links[i].children.length; j++) {
            if (links[i].children[j].page === subpage) {
              return true;
            }
          }
        }
      }

      return false;
    }

    function docPagesLinks() {
      //page property must equals to the part after #/doc/ or after #/doc/the_parent_page/
      return [
        {
          name: '10 min Quickstart',
          url: '#/doc/quickstart',
          page: 'quickstart'
        },
        {
          name: 'Developer Guides',
          url: '#/doc/developer-guide',
          page: 'developer-guide',
          children: [
            {
              name: 'Dealing with related entities',
              url: '#/doc/developer-guide/dealing-related-entities',
              parentPage: 'developer-guide',
              page: 'dealing-related-entities'
            },
            {
              name: 'Image upload',
              url: '#/doc/developer-guide/image-upload',
              parentPage: 'developer-guide',
              page: 'image-upload'
            },
            {
              name: 'Server methods and $transform (deprecated)',
              url: '#/doc/developer-guide/server-methods',
              parentPage: 'developer-guide',
              page: 'server-methods'
            },
            {
              name: 'Bootstrap an Angular-Wakanda app',
              url: '#/doc/developer-guide/bootstrap-app',
              parentPage: 'developer-guide',
              page: 'bootstrap-app'
            },
            {
              name: 'Upgrading your app from 0.4.x',
              url: '#/doc/developer-guide/upgrading-0-4',
              parentPage: 'developer-guide',
              page: 'upgrading-0-4'
            }
          ]
        },
        {
          name: 'API Reference',
          url: '#/doc/api-reference',
          page: 'api-reference',
          children: [
            {
              name: '$wakanda service',
              url: '#/doc/api-reference/wakanda-service',
              parentPage: 'api-reference',
              page: 'wakanda-service'
            },
            {
              name: '$wakandaManager factory',
              url: '#/doc/api-reference/wakanda-manager',
              parentPage: 'api-reference',
              page: 'wakanda-manager'
            },
            {
              name: '$wakandaConfig provider',
              url: '#/doc/api-reference/wakanda-config-provider',
              parentPage: 'api-reference',
              page: 'wakanda-config-provider'
            },
            {
              name: 'DataClass',
              url: '#/doc/api-reference/dataclass',
              parentPage: 'api-reference',
              page: 'dataclass'
            },
            {
              name: 'Entity',
              url: '#/doc/api-reference/entity',
              parentPage: 'api-reference',
              page: 'entity'
            },
            {
              name: 'Entity collection',
              url: '#/doc/api-reference/collection',
              parentPage: 'api-reference',
              page: 'collection'
            }
          ]
        },
        {
          name: 'Contribute',
          url: '#/doc/contribute',
          page: 'contribute'
        }
      ];
    }

    return {
      isAvailableDocPage: isAvailableDocPage,
      docPagesLinks: docPagesLinks
    };
  });
