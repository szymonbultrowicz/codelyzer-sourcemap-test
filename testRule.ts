import { BasicTemplateAstVisitor } from 'codelyzer/angular/templates/basicTemplateAstVisitor';
import { ElementAst } from '@angular/compiler';

class TestVisitor extends BasicTemplateAstVisitor {
  visitElement(prop: ElementAst, context: any): any {
    super.visitElement(prop, context);
  }
}