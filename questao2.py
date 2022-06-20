# Questão 2 - Target Sistemas
# Carlos Alberto Pamplona Filho

numeroDesejado = int(input("Digite um número: "))
valorFibonacci = 0
valorSeguinte = 1
estaPresente = False

# Calcula o valor da sequencia de Fibonacci
while valorFibonacci < numeroDesejado:
    valorFibonacci, valorSeguinte = valorSeguinte, valorFibonacci + valorSeguinte
    if (valorFibonacci == numeroDesejado):
        estaPresente = True
        break

# Imprime o resultado
if estaPresente:
    print("O número está presente na sequência de Fibonacci")
else:
    print("O número não está presente na sequência de Fibonacci")

