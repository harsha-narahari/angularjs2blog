import {Blog} from '../shared/blog.model.ts'

export var blogs: Blog[] = [
        { 
            id:1, 
            title:'Creating a "Blog" using Angular 2.', 
            author:"Harsha", 
            details:['Install Visual Studio Code, node, and npm. Now, use npm to install Typescript (npm install -g). Also, install angular cli using npm (npm install -g angular-cli). Thereafter, create a new angular 2 project using angular cli (ng new PROJECT_NAME). This project can be built using angular cli commands (ng build), and then it can be run (ng serve). The url - "http://localhost:4200" can be browsed to view the results. This URL can be changed in configuration file (protractor.conf.js).',
            'Now that we have got the installations ready, a bit of theory will help before looking at a working sample. Angular 2 applications basically consists of classes - module(s), and component(s). Both are ES6 classes that are written in Typescript, which is transpiled (compiled to JavaScript) by the Typescript compiler. The module class is annotated or decorated with @NgModule keyword. Likewise a component is decorated or annotated with @Component keyword. Annotation or decoration is ES6 concept of adding meta data to a class. Objects with properties are sent to these annotations or decorations, using which the functionality of a class is extended by angular compiler at run time.','A working sample can be seen in Github: https://github.com/harsha-narahari/angularjs2blog'], 
            summary:'Angular 2 project can be seamlessly created using tools like Visual Code, and andular cli.', 
            references:['https://vsavkin.com/the-core-concepts-of-angular-2-c3d6cbe04d04#.ea16ocucm','https://angular.io/docs/ts/latest/tutorial/'], 
            furtherReadings:['http://www.angular2.com/']  
        },
        { 
            id:2, 
            title:'Typescript - improved JavaScript!', 
            author:"B", 
            details:['para1','para2'], 
            summary:"summary 1", 
            references:['ref1','ref2'], 
            furtherReadings:['reading1', 'reading2']  
        }
    ];
