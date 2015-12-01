describe 'Some things I like about CoffeeScript', ->

    it 'has comprehensions', ->
      stuff =
        eat : ->
      spyOn(stuff, 'eat')
      list = ['toast', 'cheese', 'wine']
      # Write a comprehension that 'eat's the food in the least
      eat food for food in list

      expect(stuff.eat).toHaveBeenCalledWith('toast');

    it 'uses -> as function keyword', ->
      # Write the function 'square'
      square = (x) -> x * x
      expect(square(2)).toEqual(4)

    it 'uses less brackets for objects', ->
      # Write the nested object that is referenced below
      expect(kids.brother.name).toEqual("Max")

    it 'uses lexical scoping by default without strict mode', ->
      # Write a function 'inside_fun' that declares and initialises a variable
      # 'x'

      # outside function inside_fun
      try
        x
      catch error
        expect(error.toString()).toEqual("ReferenceError: x is not defined")

    it 'has operator aliases', ->
      # Write an operator alias expression in the expect block
      expect().toEqual(true)

    it 'has descructured assignments', ->
      [a, b, c] = # Write a statement that can be destructured
      expect(b).toEqual('b')

    it 'has a splat operator', ->
      text = "Every literary critic believes he will
              outwit history and have the last word"

      # Write a destructured assignment that uses splats to enable getting the
      # first and last word of 'text'
      expect(last).toEqual('word')
      expect(first).toEqual('Every')

    it 'has classes', ->
      # Write a class 'Car" that takes one variable 'color' into the contructor
      ferrari = new Car("red")
      expect(ferrari.color).toEqual("red")
