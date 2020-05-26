import { v4 as uuid } from 'uuid';

export interface UserJSON {
    id: string;
    name: string;
    icon: string;
    score?: (ScoreEntity)[] | null;
}
export interface ScoreEntity {
    level_1?: number | null;
    level_2?: number | null;
    level_3?: number | null;
    level_4?: number | null;
    level_5?: number | null;
    level_6?: number | null;
    level_7?: number | null;
    level_8?: number | null;
    level_9?: number | null;
    level_10?: number | null;
}



// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class User {
    public readonly id: string;
    public readonly name: string;
    public readonly icon: string;
    public readonly score: ScoreEntityProxy[] | null;
    public static Parse(d: string): User {
        return User.Create(JSON.parse(d));
    }
    public static Create(d: any, field: string = 'root'): User {
        d.id = uuid()
        if (!field) {
            obj = d;
            field = "root";
        }
        if (d === null || d === undefined) {
            throwNull2NonNull(field, d);
        } else if (typeof(d) !== 'object') {
            throwNotObject(field, d, false);
        } else if (Array.isArray(d)) {
            throwIsArray(field, d, false);
        }
        checkString(d.id, false, field + ".id");
        checkString(d.name, false, field + ".name");
        checkString(d.icon, false, field + ".icon");
        checkArray(d.score, field + ".score");
        if (d.score) {
            for (let i = 0; i < d.score.length; i++) {
                d.score[i] = ScoreEntityProxy.Create(d.score[i], field + ".score" + "[" + i + "]");
            }
        }
        if (d.score === undefined) {
            d.score = null;
        }
        return new User(d);
    }
    // toJSON is automatically used by JSON.stringify
    toJSON(): UserJSON {
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this);
    }
    private constructor(d: any) {
        this.id = d.id;
        this.name = d.name;
        this.icon = d.icon;
        this.score = d.score;
    }
}

export class ScoreEntityProxy {
    public readonly level_1: number | null;
    public readonly level_2: number | null;
    public readonly level_3: number | null;
    public readonly level_4: number | null;
    public readonly level_5: number | null;
    public readonly level_6: number | null;
    public readonly level_7: number | null;
    public readonly level_8: number | null;
    public readonly level_9: number | null;
    public readonly level_10: number | null;
    public static Parse(d: string): ScoreEntityProxy {
        return ScoreEntityProxy.Create(JSON.parse(d));
    }
    public static Create(d: any, field: string = 'root'): ScoreEntityProxy {
        if (!field) {
            obj = d;
            field = "root";
        }
        if (d === null || d === undefined) {
            throwNull2NonNull(field, d);
        } else if (typeof(d) !== 'object') {
            throwNotObject(field, d, false);
        } else if (Array.isArray(d)) {
            throwIsArray(field, d, false);
        }
        checkNumber(d.level_1, true, field + ".level_1");
        if (d.level_1 === undefined) {
            d.level_1 = null;
        }
        checkNumber(d.level_2, true, field + ".level_2");
        if (d.level_2 === undefined) {
            d.level_2 = null;
        }
        checkNumber(d.level_3, true, field + ".level_3");
        if (d.level_3 === undefined) {
            d.level_3 = null;
        }
        checkNumber(d.level_4, true, field + ".level_4");
        if (d.level_4 === undefined) {
            d.level_4 = null;
        }
        checkNumber(d.level_5, true, field + ".level_5");
        if (d.level_5 === undefined) {
            d.level_5 = null;
        }
        checkNumber(d.level_6, true, field + ".level_6");
        if (d.level_6 === undefined) {
            d.level_6 = null;
        }
        checkNumber(d.level_7, true, field + ".level_7");
        if (d.level_7 === undefined) {
            d.level_7 = null;
        }
        checkNumber(d.level_8, true, field + ".level_8");
        if (d.level_8 === undefined) {
            d.level_8 = null;
        }
        checkNumber(d.level_9, true, field + ".level_9");
        if (d.level_9 === undefined) {
            d.level_9 = null;
        }
        checkNumber(d.level_10, true, field + ".level_10");
        if (d.level_10 === undefined) {
            d.level_10 = null;
        }
        return new ScoreEntityProxy(d);
    }
    private constructor(d: any) {
        this.level_1 = d.level_1;
        this.level_2 = d.level_2;
        this.level_3 = d.level_3;
        this.level_4 = d.level_4;
        this.level_5 = d.level_5;
        this.level_6 = d.level_6;
        this.level_7 = d.level_7;
        this.level_8 = d.level_8;
        this.level_9 = d.level_9;
        this.level_10 = d.level_10;
    }
}

function throwNull2NonNull(field: string, d: any): never {
    return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
    return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
    return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
    if (!Array.isArray(d) && d !== null && d !== undefined) {
        errorHelper(field, d, "array", true);
    }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
    if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
        errorHelper(field, d, "number", nullable);
    }
}
function checkString(d: any, nullable: boolean, field: string): void {
    if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
        errorHelper(field, d, "string", nullable);
    }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
    if (nullable) {
        type += ", null, or undefined";
    }
    throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
