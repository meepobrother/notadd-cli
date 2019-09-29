import { SyntaxKind } from 'typescript';

export abstract class Ast {
    type: string;
}
/**
 * literal start
 */

export class JsonMinusNumericLiteral extends Ast {
    type: 'JsonMinusNumericLiteral' = 'JsonMinusNumericLiteral';
}

/**
 * literal end
 */

/**
 * json start
 */
export class JsonSourceFile {
    statements: JsonObjectExpressionStatement[];
}
export class PropertyAssignment { }
export class ShorthandPropertyAssignment { }
export class SpreadAssignment { }
export class AccessorDeclaration { }
export type ObjectLiteralElementLike = PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment | MethodDeclaration | AccessorDeclaration;
export class ObjectLiteralExpression {
    properties: ObjectLiteralElementLike[];
}
export class ArrayLiteralExpression {
    elements: Expression[];
}
export class JsonObjectExpressionStatement {
    expression: ObjectLiteralExpression | ArrayLiteralExpression | JsonMinusNumericLiteral | NumericLiteral | StringLiteral | BooleanLiteral | NullLiteral;
}
/**
 * json end
 */
export class Decorator extends Ast {
    type: 'Decorator' = 'Decorator';
    expression: LeftHandSideExpression;
}
/**
 * 属性名
 * Identifier 变量
 * StringLiteral string
 * NumericLiteral number
 * ComputedPropertyName 可计算
 */
/**
 * 可计算属性名
 */
export class ComputedPropertyName extends Ast {
    type: 'ComputedPropertyName' = 'ComputedPropertyName';
}
export abstract class ClassElement {
    name: PropertyName;
}
/**
 * left hand side expression
 */
export class MemberExpression { }
export class CallExpression { }
export class NonNullExpression { }
export class PartiallyEmittedExpression { }
export class LeftHandSideExpression { }

export class OmittedExpression { }
export class YieldExpression { }
export class SyntheticExpression { }
export class BinaryExpression { }
export class ConditionalExpression { }
export class ArrowFunction { }
export class SpreadElement { }
export class AsExpression { }
export class JsxOpeningElement { }
export class JsxOpeningFragment { }
export class JsxClosingFragment { }
export class JsxExpression { }
export class CommaListExpression { }

/**
 * UnaryExpression
 */
export class DeleteExpression { }
export class TypeOfExpression { }
export class VoidExpression { }
export class AwaitExpression { }
export class TypeAssertion { }
export type UpdateExpression = LeftHandSideExpression;
export type UnaryExpression = DeleteExpression | TypeOfExpression | VoidExpression | AwaitExpression | TypeAssertion | UpdateExpression;
export type Expression = OmittedExpression | UnaryExpression | CommaListExpression | JsxExpression | JsxClosingFragment | JsxOpeningFragment | JsxOpeningElement | AsExpression | SpreadElement | ArrowFunction | ConditionalExpression | BinaryExpression | SyntheticExpression | YieldExpression | CallExpression;

export class Identifier extends Ast {
    type: 'Identifier' = 'Identifier';
}

export class TypeParameterDeclaration extends Ast {
    type: 'TypeParameterDeclaration' = 'TypeParameterDeclaration';
}
export class HeritageClause extends Ast {
    type: 'HeritageClause' = 'HeritageClause';
}
export class ClassDeclaration extends Ast {
    type: 'ClassDeclaration' = 'ClassDeclaration';
    /**
     * 名称
     */
    name?: Identifier;
    /**
     * 属性/方法/构造器
     */
    members: ClassMember[];
}
export type ClassMember = MethodDeclaration | PropertyDeclaration | GetAccessorDeclaration | SetAccessorDeclaration | ConstructorDeclaration | SemicolonClassElement;

export class MethodDeclaration extends ClassElement {
    type: 'MethodDeclaration' = 'MethodDeclaration';
}
export class PropertyDeclaration extends ClassElement {
    type: 'PropertyDeclaration' = 'PropertyDeclaration';
}
export class GetAccessorDeclaration extends ClassElement {
    type: 'GetAccessorDeclaration' = 'GetAccessorDeclaration';
    name: PropertyName;
}
export class SetAccessorDeclaration extends ClassElement {
    type: 'SetAccessorDeclaration' = 'SetAccessorDeclaration';
}
export class ConstructorDeclaration extends ClassElement {
    type: 'ConstructorDeclaration' = 'ConstructorDeclaration';
}
export class SemicolonClassElement extends ClassElement {
    type: 'SemicolonClassElement' = 'SemicolonClassElement';
}

/**
 * 1 Introduction
 */

/**
 * ## 1.1 Ambient Declarations 环境声明
 * declare var document;
 * declare var $;
 */


/**
 * 1.2 Function Types 函数类型
 */


/**
 * 1.3 Object Types 对象类型
 */


/**
 * 1.4 Structural Subtyping 结构子类型化
 */


/**
 * 1.5 Contextual Typing
 */

/**
 * 1.6 Classes
 */


/**
 * 1.7 Enum Types
 */

/**
 * 1.8 Overloading on String Parameters
 */

/**
 * 1.9 Generic Types and Functions
 */

/**
 * 1.10 Namespaces
 */

/**
 * 1.11 Modules
 */


/**
 * 2基本概念
 */

/**
 * 2.1 Grammar Conventions
 */

/**
 * 2.2 Names
 */

/**
 * 2.2 Names
 * break             case              catch             class
 * const             continue          debugger          default
 * delete            do                else              enum
 * export            extends           false             finally
 * for               function          if                import
 * in                instanceof        new               null
 * return            super             switch            this
 * throw             true              try               typeof
 * var               void              while             with
 *
 * implements        interface         let               package
 * private           protected         public            static
 * yield
 *
 * any               boolean           number            string
 * symbol
 *
 * abstract          as                async             await
 * constructor       declare           from              get
 * is                module            namespace         of
 * require           set               type
 */

/**
 *  2.2.2 Property Names
 *  PropertyName:
 *  LiteralPropertyName
 *      ComputedPropertyName
 *  LiteralPropertyName:
 *      IdentifierName
 *      StringLiteral
 *      NumericLiteral
 * ComputedPropertyName:
 *   [ AssignmentExpression ]
 */
export type PropertyName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName;

/**
 * 2.2.3 Computed Property Names
 * interface Iterable<T> {
 *   [Symbol.iterator](): Iterator<T>;
 * }
 */

/**
 * 2.3 Declarations
 */


/**
 * 2.4 Scopes
 */

/**
 * 3 Types
 */

/**
 * 3.1 The Any Type
 */
/**
 * any|unknown|number|bigint|object|boolean|string|symbol|this|void|undefined|null|never
 */

export class KeywordTypeNode extends Ast {
    type: 'KeywordTypeNode' = 'KeywordTypeNode';
    kind: SyntaxKind.AnyKeyword | SyntaxKind.UnknownKeyword | SyntaxKind.NumberKeyword | SyntaxKind.BigIntKeyword | SyntaxKind.ObjectKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.StringKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.ThisKeyword | SyntaxKind.VoidKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.NullKeyword | SyntaxKind.NeverKeyword;
}

/**
 * 3.2 Primitive Types
 */

/**
 * 3.2.2 The Boolean Type
 */

/**
 * 3.2.3 The String Type
 */

/**
 * 3.2.4 The Symbol Type
 */

/**
 * 3.2.5 The Void Type
 */

/**
 * 3.2.6 The Null Type
 */

/**
 * 3.2.7 The Undefined Type
 */

/**
 * 3.2.8 Enum Types
 */

/**
 * 3.2.9 String Literal Types
 */

/**
 * 3.3 Object Types
 */

/**
 * 3.3.1 Named Type References
 */

/**
 * 3.3.2 Array Types
 */

/**
 * 3.3.3 Tuple Types
 */

/**
 * 3.3.4 Function Types
 */

/**
 * 3.3.5 Constructor Types
 */


export class EnumDeclaration extends Ast { }

export class NumericLiteral extends Ast {
    type: 'NumericLiteral' = 'NumericLiteral';
}

export class StringLiteral extends Ast {
    type: 'StringLiteral' = 'StringLiteral';
}

export class BooleanLiteral extends Ast {
    type: 'BooleanLiteral' = 'BooleanLiteral';
}

export class NullLiteral extends Ast {
    type: 'BooleanLiteral' = 'BooleanLiteral';
}
