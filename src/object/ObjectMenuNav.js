export default class MenuNav {
    constructor(title, subTitle) {
      this.title = title;
      this.subTitle = subTitle; // Un tableau avec des objets qui contiennent un texte et une icône
    }
  }
  export const colorIcon='#e87889'
  
  export const Menu = [
    new MenuNav("INFORMATION", [
      { text: "Conseil Candidat", icon: ['fa', 'user'], color: colorIcon  },
      { text: "Actualités", icon: ['fa', 'newspaper'] },
      { text: "En région", icon: ['fa', 'map'] }
    ]),
    new MenuNav("LES PORTAILS PERSONNALISÉS", [
      { text: "Spectacle", icon: ['fa', 'theater-masks'] },
      { text: "Mobilité internationale", icon: ['fa', 'globe'] },
      { text: "Emploi Store", icon: ['fa', 'store'] },
      { text: "Mon Parcour Info", icon: ['fa', 'crosshairs'] }
    ]),
    new MenuNav("SERVICES CANDIDAT", [
      { text: "M'actualiser", icon: ['fa', 'sync'], color: colorIcon },
      { text: "Recherche des offres", icon: ['fa', 'magnifying-glass'], color: colorIcon },
      { text: "Espace personnel, gérer mon dossier", icon: ['fa', 'folder'], color: colorIcon },
      { text: "M'inscrire, me réinscrire", icon: ['fa', 'laptop'], color: colorIcon },
      { text: "Trouver ma formation", icon: ['fa', 'graduation-cap'], color: colorIcon },
      { text: "MetierScope", icon: ['fa', 'briefcase'], color: colorIcon },
      { text: "Tous les services", icon: ['fa', 'list'], color: colorIcon }
    ]),
    new MenuNav("ACCUEIL", [
      { text: "Accès Candidat", icon: ['fa', 'user'] },
      { text: "Accès Entreprise", icon: ['fa', 'user'] },
      { text: "Accès Particulier Entreprise", icon: ['fa', 'user'] }
    ])
  ];
  