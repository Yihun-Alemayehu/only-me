import 'package:flutter/material.dart';

class Home3 extends StatefulWidget {
  const Home3({super.key});

  @override
  State<Home3> createState() => _Home3State();
}

class _Home3State extends State<Home3> {
  int _counter = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          _buildFutureBuilder(),
          const SizedBox(
            height: 30,
          ),
          _buildStreamBuilder(),
        ],
      ),
    );
  }

  Widget _buildFutureBuilder() {
    return Center(
      child: FutureBuilder<int>(
          future: _calculateSquare(25),
          builder: (context, snapshot) {
            switch (snapshot.connectionState) {
              case ConnectionState.done:
                return Text('Square = ${snapshot.data}');
              default:
                return const CircularProgressIndicator();
            }
          }),
    );
  }

  Future<int> _calculateSquare(int num) async {
    await Future.delayed(const Duration(seconds: 3));
    return num * num;
  }

  Widget _buildStreamBuilder() {
    return Center(
      child: StreamBuilder<int>(
          stream: _stopwatch(),
          builder: (context, snapshot) {
            switch (snapshot.connectionState) {
              case ConnectionState.active:
                return Text('TIme = ${snapshot.data}');
              default:
                return const CircularProgressIndicator();
            }
          }),
    );
  }

  Stream<int> _stopwatch() async* {
    while (true) {
      await Future.delayed(const Duration(seconds: 1));
      yield _counter++;
    }
  }
}
