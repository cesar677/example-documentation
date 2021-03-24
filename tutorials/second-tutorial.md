## Installation 
loremdsfsd sdf
sdfsdf sdf sdf
sdfsdf  sdfsd f
sdsdfsdfsdf ff sdfsdfsdfsd
 ````js
console.log("Hello world")
/** 
* Class to create a Programmer 
* @example
*  const programmerOne = new Programer({ fullname: 'cesar m m'},'javascript')
*  newProgrammer.getInfo()
*
* @see https://www.cmlabtec.com/
* @todo  implementaR  RESTO DE METODOS 
**/

class Programmer {
    /**
     * @param { User } user User´s  Information 
    * @param {string} language  a programmig luenguaje  
     */
constructor (user, language) {
    this.fullname = user.fullname;
    this.language = language
}
    /**
     * Get Programer Information 
     * @returns {void}
     */
    getInfo() {
        console.log(`i´m ${this.fullname} and my favorite lang programmer is ${this.language}`)
    }
}
/**
 * @param {User} user User´s  Information 
 * @param {string} language  a programmig luenguaje  
 * KNOW  more in {@link Programmer}
 */
const programmerOne = new Programmer(this.fullname, this.language );

/**
 * KNOW  more in {@link Programmer}
 */
const programmerTwo = new Programmer( this.user.name, 'go')

programmerOne.getInfo()
programmerTwo.getInfo()
 ````