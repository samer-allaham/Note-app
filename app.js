'use strict';
// const add = require('./utils.js')
// const sum = add(4,5)
// console.log(sum);

// colorise logs
const chalk = require('chalk');
//parsing
const yargs = require('yargs');
//modulaziation
const notes = require('./notes.js');

//customize yargs version
yargs.version('1.1.0');

//creating add
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            //to make sure they enter a title
            demandOption: true,
            //to make sure the title is string
            type: 'string'
        },
        body: {
            describe: 'note body',
            //to make sure they enter a body
            demandOption: true,
            //to make sure the title is string
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


//creating remove
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'remove by note title',
            //to make sure they enter a title
            demandOption: true,
            //to make sure the title is string
            type: 'string'
        }
    },

    handler(argv) {
        notes.removeNote(argv.title)

    }
})

//creating list 
yargs.command({
    command: 'list',
    describe: 'listing notes',
    builder: {
        title: {
            describe: 'list by note title'

        }
    },

    handler() {
        notes.listNote()
    }
})

// creating read
yargs.command({
    command: 'read',
    describe: 'reading notes',
    builder: {
        title: {
            describe: 'read by note title',
            demandOption: true,
            //to make sure the title is string
            type: 'string'

        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
//add,remove,read,list


//to show the output parsed from yargs
yargs.parse();

// console.log(yargs.argv);

